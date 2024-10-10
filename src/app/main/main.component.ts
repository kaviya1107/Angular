import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  //ngFor
  title="List"
  movies=["Gilli","Unakkum Enakum","Life of Pazham"]

  value="kavi"
  s=[
    {name:"jemi",age:80},
    {name:"nith",age:200}
  ]
   //ngSwitch
   num=0;
   movie=[1,2,3,4,5,6,7,8,9];

   //ng-if
   showme=true;
   values=false;

  //  Attribute directve
   //ng-class
   EnableRed=true;
   EnableBig=true;
   EnableItalic=true;

   //ng-style
   status="available";
   color="pink";
   Backgroundcolor="blue"

  //  template
  val=true;
}
