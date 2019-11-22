import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../Services/UserService';
import { UserModel } from '../Models/user-model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUSerComponent implements OnInit {

  constructor(private service : LoginServiceService) { }
  user : UserModel = new UserModel();
  submitted = false;
  ngOnInit() {
    console.log("hello")
  }

  registerUSer(){
    console.log("hello")
    this.service.registerUser(this.user).subscribe(data => console.log(data),error => console.log(error));
  }

  onSubmit(){
    this.registerUSer();
    this.submitted = true;
  }

}
