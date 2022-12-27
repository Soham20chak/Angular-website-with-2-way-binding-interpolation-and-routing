import { Component,EventEmitter } from '@angular/core';
import { Doctor } from 'src/app/Doctor';
import { Input ,Output} from '@angular/core';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent {
  @Input() doctor:Doctor;
  @Output() doctorDelete:EventEmitter<Doctor>=new EventEmitter();
  onClick(doctor:Doctor){
    this.doctorDelete.emit(doctor);
    console.log("Onclick has been triggered");

  }
}
