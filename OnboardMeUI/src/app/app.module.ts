import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './Components/login/login.component';
import { EmployeeHomeComponent } from './Components/employee-home/employee-home.component';
import {MatIconModule} from '@angular/material/icon';
import { PreOnboardFormComponent } from './Components/pre-onboard-form/pre-onboard-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    LoginComponent,
    EmployeeHomeComponent,
    PreOnboardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatIconModule,MatStepperModule,FormsModule,ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
