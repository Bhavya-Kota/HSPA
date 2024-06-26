import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../model/user';
//@ts-ignore

import { AlertifyServiceService } from '../../service/alertify-service.service';

// import { UserForRegister } from 'src/app/model/user';
// import { AlertifyService } from 'src/app/services/alertify.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  // user: UserForRegister;
   userSubmitted: boolean;

  constructor( private fb: FormBuilder, private userService:UserServiceService,
              /*private authService: AuthService,*/
              private alertify: AlertifyServiceService ) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //     userName: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //     confirmPassword: new FormControl(null, [Validators.required]),
    //     mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    //   }, this.passwordMatchingValidator);
     this.createRegisterationForm();
 
  }

   createRegisterationForm(){
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
      }, {validators: this.passwordMatchingValidator});
  } 

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password').value === fc.get('confirmPassword').value ? null :
        {notmatched: true};
  }

  //Getter methhods for all form controls
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

get email() {
    return this.registerationForm.get('email') as FormControl;
  }
get password() {
    return this.registerationForm.get('password') as FormControl;
  }
get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
}

  onSubmit(){
    console.log(this.registerationForm.value);
    this.userSubmitted=true;
    if(this.registerationForm.valid)
    {
      //this.user=Object.assign(this.user,this.registerationForm.value);
     this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted=false;
      this.alertify.success("Congrats! you registered successfully!");
    }else{
      this.alertify.error("kindly provide the required fields");
    }
   
    // this.userSubmitted = true;
    // if(this.registerationForm.valid){
    // //this.user =Object.assign(this.user, this.registerationForm.value);
    // this.authService.registerUser(this.userData()).subscribe(() =>
    // {
    //   this.onReset();
    //   this.alertify.success('congrats, you are successfully registered');
    // });
    // }
  }


  

 /*  onReset(){
    this.userSubmitted = false;
    this.registerationForm.reset();
  }*/

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile: this.mobile.value
    }
  }

} 