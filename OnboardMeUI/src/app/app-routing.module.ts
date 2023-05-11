import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PreOnboardFormComponent } from './Components/pre-onboard-form/pre-onboard-form.component';

const routes: Routes = [
{
  path: "",component:HomePageComponent
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
