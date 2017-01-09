export class Patient {
    record_number: number;
    ccc_number: string; 
    first_name: string;
    current_weight: number; 
    current_height: number;
    last_name: string; 
    other_name: string; 
    phone_number: number;
    gender: string; 
    bsa: number;
    is_pregnant: number; 
    get_sms: number;
    support_group: string;
    contact: string; 
    physical_address: string; 
    current_status: string;
    is_tb: number;
    is_tb_tested: number;
    is_smoke: number;
    is_alcohol: number;
    other_drugs: string;
    chronic_illnesses: any;
    drug_allergies: any;
}

export class Service { id: number; name: string; }

export class Status { id: number; name: string; }

export class Regimen { id: number; name: string; }

export class Prophylaxis { id: number; name: string; }

export class Who_stage { id: number; name: string; }

export class Source { id: number; name: string; }


export interface Illness {
    id: number; 
    name: string;
}

export interface Allergies {
    id: number;
    name: string;
}