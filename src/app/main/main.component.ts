import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title="List"
  movies=["Gilli","Unakkum Enakum","Life of Pazham"]

  value="kavi"
  s=[
    {name:"jemi",age:80},
    {name:"nith",age:200}
  ]
}
