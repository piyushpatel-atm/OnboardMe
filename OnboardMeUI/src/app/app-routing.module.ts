import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PreOnboardFormComponent } from './Components/pre-onboard-form/pre-onboard-form.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:'PreForm',
    component:PreOnboardFormComponent
  },
  {
    path: "",component:HomePageComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
