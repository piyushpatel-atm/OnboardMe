import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreOnboardFormComponent } from './Components/pre-onboard-form/pre-onboard-form.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { EmployeeHomeComponent } from './Components/employee-home/employee-home.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
{
  path: "",component:HomePageComponent
},
{

  path:"login",component:LoginComponent
},
{
  path:"addemp",component:AddEmployeeComponent
},
{
  path:"emphome",component:EmployeeHomeComponent
},
{

  path:"PreForm",component:PreOnboardFormComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
