import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent {
isPreVisiable:boolean=false;
isPostVisible:boolean=false;
preForm(){
  this.isPreVisiable = true;
  this.isPostVisible=false
}
postForm(){
  this.isPostVisible=true;
  this.isPreVisiable=false;
}
}
