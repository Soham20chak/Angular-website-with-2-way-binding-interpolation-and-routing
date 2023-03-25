import { Component } from '@angular/core';
import { Doctor } from 'src/app/Doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  localItem:string|null;
  doctors:Doctor[];
  searchText;
  
  constructor(){
    this.doctors=[{
    name:"Soham Chakraborty",
    qualification:"MBBS",
    dob:"10th Oct 2000",
    specialization:"Dermatologist",
    phoneno:987456321,
    email:"soham20chakraborty@gmail.com"
    },{
      name:"Srijan Mukherjee",
      qualification:"MD",
    dob:"20th Jan 1991",
    specialization:"Cardiology",
    phoneno:987456321,
    email:"SMukerjee@gmail.com",

    },{
      name:"Sourav Chakraborty",
      qualification:"MBBS",
    dob:"15th Oct 1952",
    specialization:"Pediatrician",
    phoneno:987456321,
    email:"souravC@gmail.com",
    },{
      name:"Aniket Mondal",
      qualification:"MD",
    dob:"19th Oct 1982",
    specialization:"ENT Specialist",
    phoneno:987456321,
    email:"AMondal123@yahoo.com",
    },{
      name:"Vaishali Agarwal",
      qualification:"MBBS",
    dob:"15th Oct 1981",
    specialization:"General Surgeon",
    phoneno:987456321,
    email:"a123Agarwal@outlook.com",
    }
  
  
  ]
    /*this.localItem=localStorage.getItem("doctors");
    if(this.localItem==null){
      this.doctors=[];
    }
    else{
      this.doctors=JSON.parse(this.localItem);
    }*/
}
deleteDoctor(doctor:Doctor){
  console.log(doctor);
  const index=this.doctors.indexOf(doctor);
  this.doctors.splice(index,1);
  localStorage.setItem("doctors",JSON.stringify(this.doctors));
}
addDoctor(doctor:Doctor){
  console.log(doctor);
  this.doctors.push(doctor);
  localStorage.setItem("doctors",JSON.stringify(this.doctors));
}
}
