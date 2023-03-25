import { Component,EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/Doctor';
import { Input ,Output} from '@angular/core';
import {Patient} from 'src/app/Patient';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent {
  @Input() doctor:Doctor;
  @Output() doctorDelete:EventEmitter<Doctor>=new EventEmitter();
  patient:Patient[];
  onClick(doctor:Doctor){
    this.doctorDelete.emit(doctor);
    console.log("Onclick has been triggered");

  }
  details(doctor:Doctor){
    for(let i=0;i<this.patient.length;i++){
      if(this.patient[i].doctor==doctor.name){
        return this.patient[i];
      }
      continue;
      
    }
    return null;
    
  }
}
