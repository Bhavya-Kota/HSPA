import { Component } from "@angular/core";



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
    property: any= {
        "Id":1,
        "name":"birla house",
        "type":"house",
        "price":20000
    }
}