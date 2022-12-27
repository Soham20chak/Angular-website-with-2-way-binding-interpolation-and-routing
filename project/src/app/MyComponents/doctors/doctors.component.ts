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
      name:"Soham",
      qualification:"MBBS",
    dob:"20th Jan 1991",
    specialization:"Dental",
    phoneno:987456321,
    email:"soham20chakraborty@gmail.com"
    }]
    this.localItem=localStorage.getItem("doctors");
    if(this.localItem==null){
      this.doctors=[];
    }
    else{
      this.doctors=JSON.parse(this.localItem);
    }
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
