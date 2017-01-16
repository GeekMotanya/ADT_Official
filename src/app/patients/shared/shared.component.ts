import { Component, OnInit, Input, DoCheck, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientsService } from '../patients.service';
import { Patient, Service, Status, Regimen, Prophylaxis, Who_stage, Source, Illness, Allergies } from '../patients';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import { Observable } from 'rxjs'


@Component({
    selector: 'shared-patient-form',
    templateUrl: 'shared-form.component.html'
})
export class SharedComponent implements OnInit {
    // Define properties first.
    model = new Patient;
    source = new Source;
    service = new Service
    regimen = new Regimen;
    who_stage = new Who_stage;
    prophylaxis = new Prophylaxis;
    errorMessage: string;
    patientServices: Observable<Service[]>;
    patientRegimen: Observable<Regimen[]>;
    patientWhostage: Observable<Who_stage[]>;
    patientProphylaxis: Observable<IMultiSelectOption[]>;

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
        this.chronicIllness = this._patientService.getIllness();
        this.allergiesList = this._patientService.getAllergies();
        this.patientSources = this._patientService.getSource();
        this.patientServices = this._patientService.getService();
        this.patientRegimen = this._patientService.getRegimen();
        this.patientWhostage = this._patientService.getWho_stage();
        this.patientProphylaxis = this._patientService.getProphylaxis();
    }

    ngDoCheck(): void {
        this.model.bsa = Math.sqrt((this.model.current_weight * this.model.current_height) / 3600);
        // console.log(this.illness.data);
    }

    /**
     * Validation for template driven forms
     * Visit angular.i0 -> 
     * Forms Validation Cookbook Tutorial
     */

    patientAdd: NgForm;
    // Queries for the form-> patientAdd
    @ViewChild('patientAddForm') currentForm: NgForm;

    // Checks for changes to the orm (html template)
    ngAfterViewChecked() {
        this.formChanged();
    }

    formChanged() {
        if (this.currentForm === this.patientAdd) { return; }
        this.patientAdd = this.currentForm;
        if (this.patientAdd) {
            this.patientAdd.valueChanges
                .subscribe(data => this.onValueChanged(data));
        }
    }

    onValueChanged(data?: any) {
        if (!this.patientAdd) { return; }
        const form = this.patientAdd.form;
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
     * the patient's model.
     */

    setDateOfBirth(value: any) {
        let response = this._patientService.calculateDate(value);
        this.model.birth_date = value;
        this.model.age_in_years = response.years;
        this.model.age_in_months = response.months;
    }

    setDate(value: any, val: string) {
        if (val == 'tb_start') {
            this.model.start_tb_phase = value;
        }
        if (val == 'tb_end') {
            this.model.end_tb_phase = value;
        }
        if (val == 'enrollment') {
            this.model.enrollment_date = value;
        }
        if (val == 'regimen') {
            this.model.regimen_start_date = value;
        }
        if (val == 'isoniazid_start') {
            this.model.isoniazid_start = value;
        }
        if (val == 'isoniazid_end') {
            this.model.isoniazid_end = value;
        }
    }

    setEnrollDate(value: any, val: string) {
        this.model.enrollment_date = value;
        console.log(val);
    }

    setregimenDate(value: any) {
        this.model.regimen_start_date = value;
    }

    /**
     * Submit form data to the back-end server
     */
    onSubmit(): void {
        this._patientService.addPatient(this.model);
    }

    // TODO: Remove this when done
    get diagnostic () {
        return JSON.stringify(this.model);
    }
    
}