import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authservice: AuthService,
              private alertify: AlertifyService
             ) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
     console.log(loginForm.value);
     const token = this.authservice.authUser(loginForm.value);
     if(token){
      localStorage.setItem('token',token.userName);
      this.alertify.success('Login Successful');
     }
     else{
      this.alertify.error('Login not Successful');
     }
  }
}
