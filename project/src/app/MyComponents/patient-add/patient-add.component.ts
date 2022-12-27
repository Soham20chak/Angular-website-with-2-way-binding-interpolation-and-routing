import { Component , Output , EventEmitter} from '@angular/core';
import { Patient } from 'src/app/Patient';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent {
  name:string;
    desc:string;
    phoneno:number;
    age:number;
    gender:string;
    appointment_date:string;
    doctor:string;
  @Output() patientAdd:EventEmitter<Patient>=new EventEmitter();
onSubmit(){
  const patient = {
    name:this.name,
    desc:this.desc,
    phoneno:this.phoneno,
    age:this.age,
    gender:this.gender,
    appointment_date:this.appointment_date,
    doctor:this.doctor

  }
  this.patientAdd.emit(patient);
}
}
