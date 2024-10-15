import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';

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

//Pipes
currentDate:Date=new Date(); //date
message="Welcome to Angular"; //upperlower
price=125; //currency
fraction=2/4; //percent
number=2.312; //decimal and format is 1.2-3
name="kaviya jemima"; //titlecase
}

