
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../service/housing.service';
import { Iproperty } from './IProperty.Interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
 SellRent=1;
  properties: Array<Iproperty>;

  constructor(private route:ActivatedRoute, private housingservice:HousingService) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString())
    {
      this.SellRent=2;
    }
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data=>
      {
        this.properties=data;
        console.log(data);
       
      },error=>{
        console.log('httperror:');
        console.log(error);
      }
    
    
    );
  }
}

