import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/UserService';
import { UserModel } from '../Models/user-model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(private service : LoginServiceService) { }
  userLogin: UserModel = new UserModel();
  ngOnInit() {
  }

  

  loginUser(){
    this.service.loginUser(this.userLogin).subscribe(data => console.log(data),error=>console.log(error));
    // if(this.loginUser!==null){
    //   sessionStorage.setItem('validUser',JSON.stringify(data));
    // }
  }

  onSubmit(){
    
    console.log(sessionStorage.getItem('validUser'))
  }

}
