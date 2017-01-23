import { Component, OnInit, Input, DoCheck, ViewChild, AfterViewChecked, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientsService } from '../patients.service';
import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness, Allergies, FamilyPlanning, Locations } from '../patients';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'patient-form',
    templateUrl: './shared-form.component.html'
})
export class SharedComponent implements OnInit, DoCheck {

    @Input() formType: string;

    // Define properties first.
    @Input() patient = new Patient;
    @Input() edit: boolean;
    source = new Source;
    service = new Service
    regimen = new Regimen;
    who_stage = new Who_stage;
    prophylaxis = new Prophylaxis;
    errorMessage: string;
    patientServices: Service[];
    patientRegimen: Observable<Regimen[]>;
    patientWhostage: Observable<Who_stage[]>;
    patientProphylaxis: Observable<IMultiSelectOption[]>;
    familyPlanning: Observable<FamilyPlanning[]>;
    birth_place: Observable<Locations[]>;

    private selectedOptions: string[]; // Default selection

    private chronicIllness: Observable<IMultiSelectOption[]>;

    private allergiesList: Observable<IMultiSelectOption[]>;

    private patientSources: Observable<string[]>;

    private mySettings: IMultiSelectSettings = {
        pullRight: false,
        enableSearch: true,
        checkedStyle: 'checkboxes',
        buttonClasses: 'btn btn-default',
        selectionLimit: 0,
        closeOnSelect: false,
        showCheckAll: true,
        showUncheckAll: true,
        dynamicTitleMaxItems: 3,
        maxHeight: '300px',
    };

    private myTexts: IMultiSelectTexts = {
        checkAll: 'Check all',
        uncheckAll: 'Uncheck all',
        checked: 'checked',
        checkedPlural: 'checked',
        searchPlaceholder: 'Search...',
        defaultTitle: 'Select',
    };

    // Methods section: The constructor comes first!
    constructor(private _patientService: PatientsService) { }

    ngOnInit(): void {
        this.birth_place = this._patientService.getLocation();
        this.familyPlanning = this._patientService.getFamilyPlan();
        this.chronicIllness = this._patientService.getIllness();
        this.allergiesList = this._patientService.getAllergies();
        this.patientSources = this._patientService.getSource();
        this._patientService.getService().subscribe(service => { this.patientServices = service });
        this.patientRegimen = this._patientService.getRegimen();
        this.patientWhostage = this._patientService.getWho_stage();
        this.patientProphylaxis = this._patientService.getProphylaxis();
    }
    ngDoCheck(): void {
        this.patient.bsa = Math.sqrt((this.patient.current_weight * this.patient.current_height) / 3600);
        // console.log(this.illness.data);
    }

    /**
     * Validation for template driven forms
     * Visit angular.i0 -> 
     * Forms Validation Cookbook Tutorial
     */
     patientForm: NgForm;
    // Queries for the form-> patientForm
    @ViewChild('patientForm') currentForm: NgForm;

    // Checks for changes to the orm (html template)
    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.patientForm) { return; }
        this.patientForm = this.currentForm;
        if (this.patientForm) {
            this.patientForm.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.patientForm) { return; }
        const form = this.patientForm.form;
        console.log(form);
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'ccc_number': '',
        'first_name': '',
        'weight': '',
        'height': ''
    };

    validationMessages = {
        'ccc_number': {
            'required': 'ccc number is required.'
        },
        'first_name': {
            'required': `Patients first name is required.`
        },
        'weight': {
            'required': `Patient's weight is required.`
        },
        height: {
            'required': `Patient's height is required.`
        }
    };

    /**
     * Methods prefixed with set... modify the property values of
     * the patient's patient.
     */

    setDateOfBirth(value: any) {
        this.patient.getAge(value);
    }

    setDate(value: any, val: string) {
        if (val == 'tb_start') {
            this.patient.start_tb_phase = value;
        }
        if (val == 'tb_end') {
            this.patient.end_tb_phase = value;
        }
        if (val == 'enrollment') {
            this.patient.enrollment_date = value;
        }
        if (val == 'regimen') {
            this.patient.regimen_start_date = value;
        }
        if (val == 'isoniazid_start') {
            this.patient.isoniazid_start = value;
        }
        if (val == 'isoniazid_end') {
            this.patient.isoniazid_end = value;
        }
    }

    setEnrollDate(value: any, val: string) {
        this.patient.enrollment_date = value;
        console.log(val);
    }

    setregimenDate(value: any) {
        this.patient.regimen_start_date = value;
    }

    setService(value) {
        console.log(value);
        // console.log(this.patientServices.indexOf(value));
    }

    /**
     * Submit form data to the back-end server
     */
    onSubmit(): void {
        if (this.formType == 'addPatient') {
            this._patientService.addPatient(this.patient).subscribe(
                p => { console.log(`I have posted: ` + p) },
                error => this.errorMessage = <any>error
            );
        }
        else {
            console.log(this.patient);
            this._patientService.updatePatient(this.patient).subscribe(
                p => { console.log(`I have put: ` + p) },
                error => this.errorMessage = <any>error
            );
        }
    }
    onChange(value: any): void {
        console.log(value);
    }

    // TODO: Remove this when done
    get diagnostic() {
        return JSON.stringify(this.patient);
    }

}