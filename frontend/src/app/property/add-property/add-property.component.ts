import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from '../property-list/IProperty.Interface';



@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  //will come from  maasters
  propertyTypes: Array<string> = ['House','Apartment','duplex']
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished']
  sideTypes : Array<string> = ['East','West','North','South']

  propertyView: Iproperty = {
     Id:null,
     SellRent:null,
     name:'',
     price:null,
     type:null

  };

  constructor(private router:Router){
    
  }

  ngOnInit() {
  }
  OnSubmit()
  {
    console.log("Congrats!Form Submitted");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
