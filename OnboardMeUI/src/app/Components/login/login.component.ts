import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string="";
  password:string="";
  onSubmit(){
    console.log(this.userName,this.password);
  }
}
