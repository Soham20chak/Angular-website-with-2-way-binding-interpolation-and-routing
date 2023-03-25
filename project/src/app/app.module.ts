import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './MyComponents/doctors/doctors.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { DoctorInfoComponent } from './MyComponents/doctor-info/doctor-info.component';
import { DoctorAddComponent } from './MyComponents/doctor-add/doctor-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { PatientsComponent } from './MyComponents/patients/patients.component';
import { PatientInfoComponent } from './MyComponents/patient-info/patient-info.component';
import { PatientAddComponent } from './MyComponents/patient-add/patient-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    HomeComponent,
    DoctorInfoComponent,
    DoctorAddComponent,
    LoginComponent,
    SignupComponent,
    PatientsComponent,
    PatientInfoComponent,
    PatientAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
