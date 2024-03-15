import { Component, OnInit } from '@angular/core';
import { AlertifyServiceService } from '../service/alertify-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinuser:string;
  constructor(private alertify: AlertifyServiceService) { }

  ngOnInit() {
  }
  loggedin(){
    this.loggedinuser= localStorage.getItem('token');
    return this.loggedinuser;
  }

  onLogout()
  {
    localStorage.remove('token');
    this.alertify.success("you are logout successfully");
  }
}
