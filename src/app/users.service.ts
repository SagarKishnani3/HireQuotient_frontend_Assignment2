import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endPoint='https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getAllPosts():Observable<any>{
      return this.http.get(endPoint)
  }
}
