import { Component, Input } from "@angular/core";
import { Iproperty } from "../property-list/IProperty.Interface";



@Component(
    {
        selector:'app-property-card',
        //template: '<h1> I am on Card</h1>',
        templateUrl: 'property-Card.component.html',
        //styles : ['h1 {font-weight:normal;}']
        styleUrls:['property-card.component.css']
    }
)
export class PropertyCardComponent{
@Input() property:Iproperty;


}