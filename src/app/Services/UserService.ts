import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,throwError} from 'rxjs';
import { UserModel } from 'src/app/Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
private baseurl = 'http://localhost:8080/user/';

  constructor(private http : HttpClient) { }

  registerUser(User : object):Observable<object>{
    console.log(User)
    return this.http.post(this.baseurl+'register',User);
  }

}
