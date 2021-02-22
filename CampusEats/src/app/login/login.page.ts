import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   loginForm: FormGroup;

   errorMessages = {
    email: [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern' , message: 'Your email is invalid'}
    ],
    password: [
      {type: 'required' , message: 'Password is required'},
      {type: 'pattern' , message: 'Your password should contain 8 characters'}
    ]
   }
 
  constructor(private fb: FormBuilder) {
  
   }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    

  }

  logForm() {
    console.log(this.loginForm.value);
  }

}
