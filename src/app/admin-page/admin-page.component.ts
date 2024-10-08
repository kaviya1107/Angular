import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  firstname="kavi"
  secondname="ya"
  title="learn" 
  getMax(first:number,second:number){ //using function
    return Math.max(first,second);
  }
  getName(){
    return this.firstname;
  }
  color="red" //style
  isdisabled=true //property binding
  name="MP" //two way binding
  //event binding
  clickcount=0;
  clickcount1=1;
  clickme(){
    this.clickcount++;
  }
  value='';
  value1='';
  handleinput(event:any){
    this.value=(event.target as HTMLInputElement).value;
  }
  buttonclick(){
    alert("hello");
  }
  keyuped(a:any){
    console.log("typed");
  }
}
