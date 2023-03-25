import { Component , Output , EventEmitter} from '@angular/core';
import { Doctor } from 'src/app/Doctor';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent {
  name:string;
  qualification:string;
  specialization:string;
  phoneno:number;
  email:string;
  dob:string;
  @Output() doctorAdd:EventEmitter<Doctor>=new EventEmitter();
onSubmit(){
  const doctor = {
    
    name:this.name,
    qualification:this.qualification,
  specialization:this.specialization,
  phoneno:this.phoneno,
  email:this.email,
  dob:this.dob

  }
  this.doctorAdd.emit(doctor);
}
}
