import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './materialmodule';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './Components/login/login.component';
import { EmployeeHomeComponent } from './Components/employee-home/employee-home.component';
import {MatIconModule} from '@angular/material/icon';
import { PreOnboardFormComponent } from './Components/pre-onboard-form/pre-onboard-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PostOnboardingComponent } from './Components/post-onboarding/post-onboarding.component';
import { dematerialize } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeHomeComponent,
    AddEmployeeComponent,
    LoginComponent,
    PreOnboardFormComponent,
    PostOnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
    ,MatFormFieldModule,MatInputModule,MatIconModule,MatStepperModule,FormsModule,ReactiveFormsModule,
    MatCheckboxModule,MatProgressBarModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
