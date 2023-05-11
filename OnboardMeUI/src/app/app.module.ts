import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './materialmodule';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EmployeeHomeComponent } from './Components/employee-home/employee-home.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { LoginComponent } from './Components/login/login.component';
import { PreOnboardFormComponent } from './Components/pre-onboard-form/pre-onboard-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeHomeComponent,
    AddEmployeeComponent,
    LoginComponent,
    PreOnboardFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
