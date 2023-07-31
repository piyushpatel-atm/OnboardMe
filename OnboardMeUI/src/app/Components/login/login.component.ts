import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppservicesService } from 'src/app/services/appservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public fb: FormBuilder, private service: AppservicesService) { }
  loginForm!:FormGroup;
  login(){
    
  }
}
