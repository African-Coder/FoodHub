import { Component, OnInit } from '@angular/core';
import  { FormBuilder, Validators, FormGroup, AbstractControl, FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registrationForm: FormGroup;

  // get fname() {return this.registrationForm.get('fname');}
  // get lname() {return this.registrationForm.get('lname');}
  // get email() {return this.registrationForm.get('email');}
  // get password() {return this.registrationForm.get('password');}
  // get confirmPassword() {return this.registrationForm.get('confirmPassword');}

  public errorMessages = {

    fname:[
      {type: 'required', feedback: 'First name is required'},
      {type: 'maxlength' , feedback: 'First name cannot be longer than 50 characters'},
    ],

    lname:[
      {type: 'required', feedback: 'Last name is required'},
      {type: 'maxlength' , feedback: 'Last name cannot be longer than 50 characters'},
   
    ],

    email:[
      {type: 'required', feedback: 'Email is required'},
      {type: 'pattern', feedback: 'Please enter a valid email address'},
    ],

    cellPhone:[
      {type: 'required', feedback: 'Cellphone number is required'},
      {type: 'pattern' , feedback: 'Please enter a valid cellphone number'},
    ],

    password:[
      {type: 'required' , feedback: 'Please enter password'},
      {type: 'maxlength' , feedback: 'Please enter a valid password'},
    ],

    confirmPassword:[
      {type: 'required' , feedback: 'Confirm password is required'}
    ]

  };
 
  formErrors = {
    fname: '',
    lname: '',
    email: '',
    cellPhone: '',
    password: '',
    confirmPassword: ''
 
  };
  
  constructor(private fb: FormBuilder) {

   

   }



  ngOnInit() {

    

    this.registrationForm = this.fb.group({
      fname: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ])],
      lname: ['', Validators.compose([ 
        Validators.required,
        Validators.maxLength(50)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])],
      cellPhone: ['', Validators.compose([
        Validators.required,
        Validators.pattern("(^0[678][123456789][0-9]{7})")
      ])],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.maxLength(8)]],
        confirmPassword: ['', Validators.required],
      },{validator: matchPsw}),
        
    });
  }    

  
  public registerForm() {

    if (this.registrationForm.get('password').value !== this.registrationForm.get('confirmPassword').value ) {
      console.log('Passwords do not match'); 
    }
    else
    {
      console.log('Passwords match');
      console.log(this.registrationForm.value);
    }

    
  }

  logValidationErrors (group : FormGroup = this.registrationForm) : void {
    Object.keys(group.controls).forEach((key : string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {   
          const messages = this.errorMessages[key];

          for (const errorKey in abstractControl.errors) {
            if(errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          } 
        }
        if (abstractControl instanceof FormGroup) {
          this.logValidationErrors(abstractControl);
        } 
    });
  }

} 

function matchPsw(g: AbstractControl) : {[key: string] : any} | null {

  const passwordControl = g.get('password');
  const confirmPasswordControl = g.get('confirmPassword');

  if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) 
  {
    return null;
  }
  else
{
  return { 'passwordMismatch' : true};
}

}