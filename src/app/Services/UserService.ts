import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { UserModel } from 'src/app/Models/user-model';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
private baseurl = 'http://localhost:8080/user/';

  constructor(private http : HttpClient) { }

  registerUser(UserModel : UserModel):Observable<Object>{
    console.log(UserModel)
    return this.http.post(this.baseurl+'register',UserModel);
  }

  loginUser(UserModel : UserModel):Observable<Object>{
    console.log(UserModel )
    return this.http.post(this.baseurl+'loginUser',UserModel);
  }

}
