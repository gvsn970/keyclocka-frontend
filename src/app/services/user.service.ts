import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:9090/user/';
  
  

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};
  UserService: any;

  constructor(private httpClient: HttpClient) { }
  addUser(data): Observable<any> {
    return this.httpClient.post(this.userURL+`create`, data)
  }  

  public create(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userURL + 'create', user, this.httpOptions);
  }
  deleteUser(id) { 
    return this.httpClient.delete(this.userURL+`deleteuser/`+id,{  responseType: 'text' as 'json' })
  }
  getuserbyId(id){
    return this.httpClient.get(this.userURL+`userdetailbyid/${id}`);
  }
  updateUser(id,data){
    return this.httpClient.post(this.userURL+`update/${id}`, data);

  }

}
