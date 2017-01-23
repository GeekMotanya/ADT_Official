export class Patient {
    id: number;
    ccc_number: string;
    first_name: string;
    last_name: string;
    other_name: string;
    birth_date: string;
    place_of_birth: string;
    age_in_years: number;
    age_in_months: number;
    current_weight: number;
    current_height: number;
    bsa: number;
    phone_number: number;
    physical_address: string;
    gender: string; 
    is_pregnant: boolean;
    is_tb: boolean;
    is_tb_tested?: boolean;
    is_sms: boolean;
    is_smoke: boolean;
    is_alcohol: number;
    current_status: string; 
    enrollment_date: string;
    regimen_start_date: string;
    regimen_id: number;
    service_id: number;
    facility_id: number = 1;
    supporter_id: number = 1;
    who_stage_id: number;
    prophylaxis: number[];
    source_id: number;
    // optional properties
    status?: string;
    disclosure?: number;
    spouse_ccc?: number;
    family_planning?: number[];
    support_group?: string;
    alternate_contact?: number;
    other_drugs?: string;
    other_illness?: string;
    other_allergies?: string;
    illnesses?: number[];
    drug_allergies?: number[];
    tb_category?: string;
    tb_phase?: string;
    start_tb_phase?: string;
    end_tb_phase?: string;
    pep_reason?: string;
    isoniazid_start?: string;
    isoniazid_end?: string;

    // toggle
    is_support: boolean;
    is_illness: boolean;
    is_drugs: boolean;
    is_allergies: boolean;
    
    getAge(value: any): any {
        let dob: any = new Date(value);
        let today: any = new Date();
        let age_in_years: number;
        let age_in_months: number;

        this.age_in_years = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
        var y1 = today.getFullYear();
        var y2 = dob.getFullYear();
        this.age_in_months = (today.getMonth() + y1 * 12) - (dob.getMonth() + y2 * 12);
    }

    getMSQ() {
        this.bsa = Math.sqrt((this.current_weight * this.current_height) / 3600);
    }
}

export class Service {
    id: number;
    name: string;
}

// populating the multiselect
export class Allergies {
    id: number;
    name: string;
}

export class Regimen { id: number; name: string; }

export class Prophylaxis { id: number; name: string; }

export class Who_stage { id: number; stage: string; }

export class Status { id: number; name: string; }

export class Pep_reason { id: number; name: string }


export class Source {
    id: number;
    name: string;
}

export class Illness {
    id: number;
    name: string;
}

export class date {
    months: number;
    years: number;
}

export class FamilyPlanning {
    id: number;
    name: string;
}

export class Locations {
    id: number;
    name: string;
}