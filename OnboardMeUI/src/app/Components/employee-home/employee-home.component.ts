import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent {
isVisiable:boolean=false;
preForm(){
  this.isVisiable = true;
}
}
