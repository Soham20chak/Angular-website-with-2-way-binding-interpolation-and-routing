import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './MyComponents/doctors/doctors.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { PatientsComponent } from './MyComponents/patients/patients.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'patients',component:PatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
