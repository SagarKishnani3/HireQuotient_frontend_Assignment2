import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { faTrash , faSearch, faPenSquare} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hireQuotient';
  POSTS:any;
  pageNumber:number=1;
  count:number=0;
  tableSize:number=10;
  tableSizes:any=["size",5,10,15,20];
  icon=faTrash
  icon2=faSearch
  icon3=faPenSquare
  isChecked: boolean = false;
  selectAll: boolean=false;
  term:any
  onCheckboxChange2(){
    console.log(this.selectAll)
    this.isChecked=this.selectAll
  }
  onCheckboxChange() {
    console.log('Checkbox changed. New value:', this.isChecked);
  }
  userDetail=new FormGroup({
    box:new FormControl(false),
    box2:new FormControl(false)
  })
  constructor(private userServices:UsersService){}
  ngOnInit():void{
    this.postLists()
  }
  tablecheck:boolean=false;
  delete2(){
    if(this.selectAll==true){
      this.POSTS=null
      if(this.POSTS==null){
        this.tablecheck=true;
      }
      console.log(this.POSTS)
    }
  }
  delete(value:number){
    alert("this table will be permanently deleted")
    this.POSTS.splice(value,1);
 }
 get box(){
  return this.userDetail.get('box');
}
get box2(){
  return this.userDetail.get('box2');
}
  postLists():any{
    this.userServices.getAllPosts().subscribe((response)=>{
      this.POSTS=response;
      
    })
  }
  onTableDataChange(event:any):any{
    this.pageNumber=event;
    this.postLists();
  }
  onTableSizeChange(event:any):any{
    this.tableSize=event.target.value;
    this.pageNumber=1;
    this.postLists();
  }
  
}
