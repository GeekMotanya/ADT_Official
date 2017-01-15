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
    regimen: number;
    service_type: number;
    who_stage: number;
    prophylaxis: number[];
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
    chronic_illnesses?: number[];
    drug_allergies?: number[];
    tb_category?: string;
    tb_phase?: string;
    start_tb_phase: string;
    end_tb_phase: string;
    pep_reason: string;
    isoniazid_start?: string;
    isoniazid_end?: string;

    // toggle
    is_support: boolean;
    is_illness: boolean;
    is_drugs: boolean;
    is_allergies: boolean;
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