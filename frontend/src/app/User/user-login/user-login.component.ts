import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { AlertifyServiceService } from '../../service/alertify-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthService,
              private alertify:AlertifyServiceService,
              private router: Router) { }

  ngOnInit() {
  }
  
  onLogin(loginForm :NgForm)
  {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token)
    {
      localStorage.setItem('token', token.userName);
      this.alertify.success("login Successful");
      this.router.navigate(['/']);
    }else{
     this.alertify.error("userid or password is wrong");
    }
  }

  
}
