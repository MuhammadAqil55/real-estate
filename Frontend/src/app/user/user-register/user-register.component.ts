import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
    registerationForm: FormGroup;
     user: UserInterface;
     userSubmitted : boolean;
  constructor(  private fb: FormBuilder, 
                private userService:UserServiceService,
                private alertify : AlertifyService) { }

  ngOnInit() {
   // this.registerationForm = new FormGroup({
     // userName: new FormControl('Mark',Validators.required),
      //email: new FormControl(null,[Validators.required,Validators.email]),
      //password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      //confirmPassword:new FormControl(null,[Validators.required]),
      //mobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])
    //});
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registerationForm = this.fb.group({
      userName:[null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required, Validators.minLength(8)]],
      confirmPassword:[null,[Validators.required]],
      mobile: [null,[Validators.required,Validators.maxLength(10)]]
    },{validators:this.passwordMatchingValidator});
  }




  passwordMatchingValidator(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notmatched: true };
  }


  userData() : UserInterface{
    return this.user = {
      userName : this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile:this.mobile.value
      
      
    }
  }
  //Getter Methods for all form controls
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get ('email') as FormControl;
  }

  get password(){
    return this.registerationForm.get ('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get ('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registerationForm.get ('mobile') as FormControl;
  }



  onSubmit(){
    console.log(this.registerationForm.value);
    this.userSubmitted=true;
    if(this.registerationForm.valid){
     //this.user = Object.assign(this.user,this.registerationForm.value);
     //localStorage.setItem('Users',JSON.stringify (this.user));
     this.userService.addUser(this.userData());
     this.registerationForm.reset();
     this.userSubmitted = false;
     this.alertify.success("Congrates, you are successfully Registered")
    }
    else{
      this.alertify.error('kindly provide the required fields');
      
    }
  }

 

}
