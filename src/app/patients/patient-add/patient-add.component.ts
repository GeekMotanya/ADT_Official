import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness } from '../patients';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
  providers: [PatientsService]
})

export class PatientAddComponent implements OnInit {

  patient: Patient[]; services: Service[];

  statuses: Status[]; regimens: Regimen[];

  prophylaxiss: Prophylaxis[]; who_stages: Who_stage[];

  sources: Source[]; illnesses: Illness[];

  // Patient Information and Demographics
  medicalRecordNumber: string; patientcccNumber: string;

  lastname: string; firstname: string; othername: string;

  gender: string; dob: Date; pob: string;

  ageYears: number; ageMonths: string;

  smsNotification: string; contact: number; address: Text;

  bsa: number; weight: number; height: number;

  supportGroup: string;

  // Patient History
  chronicIllnesses: string; otherIllness: string;
  drugs: string; drugAllergies: string; otherDrugs: string;
  smoke: string; alcohol: string; tbTested: string; tb: string;

  // 
  status: string; service: string; regimen: string; source: number;

  whoStage: string; dateEnrolled : string;

  constructor(private patientsService: PatientsService) {

  }
  calc_bsa(){
    var w = 0, h = 0;
    
    w = this.weight; h = this.height;
    this.bsa = (w + h);

  }
  ngOnInit() {
    this.getServices();
    this.getStatus(); this.getRegimen();
    this.getProphylaxis(); this.getWho_stage();
    this.getScource(); this.getIllness();
  }
  getServices() {
    this.patientsService.getService().subscribe(services => { this.services = services; });
  }

  getStatus() {
    this.patientsService.getStatus().subscribe(statuses => { this.statuses = statuses; })
  }

  getRegimen() {
    this.patientsService.getRegimen().subscribe(regimens => { this.regimens = regimens; });
  }

  getProphylaxis() {
    this.patientsService.getProphylaxis().subscribe(prophylaxiss => { this.prophylaxiss = prophylaxiss; });
  }

  getWho_stage() {
    this.patientsService.getWho_stage().subscribe(who_stages => { this.who_stages = who_stages; });
  }

  getScource() {
    this.patientsService.getSource().subscribe(sources => { this.sources = sources; });
  }

  getIllness() {
    this.patientsService.getIllness().subscribe(illnesses => { this.illnesses = illnesses });
  }

  addPatient() {

    // data.preventDefualt();
    var newPatient = {
      ccc_number: this.patientcccNumber,
      last_name: this.lastname,
      first_name: this.firstname,
      other_name: this.othername,
      gender: this.gender,
      phone_number: this.contact,
      physical_address: this.address,
      support_group: this.supportGroup,
      is_tb: this.tb,
      is_tb_tested: this.tbTested,
      is_smoke: this.smoke,
      is_alchohol: this.alcohol,
      service_id: this.service,
      is_sms: this.smsNotification,
      source_id: this.source,
      who_stage_id: this.whoStage,
      enrollment_date : this.dateEnrolled
    }

    console.log(newPatient);
    this.patientsService.addPatient(newPatient)
        .subscribe( patient => {
          this.patient.push(patient);
        });
  }
}
