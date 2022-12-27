import { Component } from '@angular/core';

import { Patient } from 'src/app/Patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  localItem:string|null;
  patients:Patient[];
  searchText;
  
  constructor(){
    this.patients=[{
      name:"Shivam Majhi",
    desc:"prolonged headache , cough and continuous sneezes",
    phoneno:4589647120,
    age:37,
    gender:"male",
    appointment_date:"17th January",
    doctor:"Srijan Mukherjee",
    },{
      name:"Shivam Majhi",
    desc:"prolonged headache , cough and continuous sneezes",
    phoneno:4589647120,
    age:37,
    gender:"male",
    appointment_date:"17th January",
    doctor:"Srijan Mukherjee",
    }]
   /* this.localItem=localStorage.getItem("doctors");
    if(this.localItem==null){
      this.doctors=[];
    }
    else{
      this.doctors=JSON.parse(this.localItem);
    }*/
    
}
deletePatient(patient:Patient){
  console.log(patient);
  const index=this.patients.indexOf(patient);
  this.patients.splice(index,1);
  localStorage.setItem("patients",JSON.stringify(this.patients));
}
addPatient(patient:Patient){
  console.log(patient);
  this.patients.push(patient);
  localStorage.setItem("doctors",JSON.stringify(this.patients));
}
}
