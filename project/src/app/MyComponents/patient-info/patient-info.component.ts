import { Component,Input,Output ,EventEmitter} from '@angular/core';
import { Patient } from 'src/app/Patient';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent {
  @Input() patient:Patient;
  @Output() patientDelete:EventEmitter<Patient>=new EventEmitter();
  onClick(patient:Patient){
    this.patientDelete.emit(patient);
    console.log("Onclick has been triggered");

  }
}
