import { Component } from '@angular/core';

import { Patient } from 'src/app/Patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent {
  localItem:string|null;
  patients:Patient[];
  searchText;
  
  constructor(){
    this.patients=[{
      name:"Shivam Majhi",
    desc:"pain in the chest , prolonged headache , cough and continuous sneezes",
    phoneno:4589647120,
    age:37,
    gender:"male",
    appointment_date:"17th January",
    doctor:"Srijan Mukherjee",
    },{
      name:"Snehashish Chaudhuri",
    desc:"cough and cold",
    phoneno:4587102364,
    age:12,
    gender:"male",
    appointment_date:"30th December",
    doctor:"Sourav Chakraborty",
    },{
      name:"Ushashree Banerjee",
    desc:"pain in the ear and throat",
    phoneno:4587102364,
    age:45,
    gender:"female",
    appointment_date:"30th December",
    doctor:"Aniket Mondal",
    },{
      name:"Shakib Rahman",
    desc:"appendix pain",
    phoneno:4587102364,
    age:25,
    gender:"male",
    appointment_date:"30th December",
    doctor:"Vaishali Agarwal",
    },{
      name:"Chandan Pathak",
      desc:"pathes and infections on the skin",
      phoneno:4587102364,
      age:25,
      gender:"male",
      appointment_date:"30th December",
      doctor:"Soham Chakraborty",
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

