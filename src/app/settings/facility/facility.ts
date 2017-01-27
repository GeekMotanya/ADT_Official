export class Facility {
    id: number;
    code: string;
    name: string;
    adult_age: number;
    phone_number: number;
    weekday_max: number;
    weekend_max: number;
    type: Types;
    county: Counties;
    county_sub_id: number;
    supporter_id: number;
}

export class Counties {
    id: number;
    name: string
}

export class Types {
    id: number;
    name: string;
}

// export class SubCounties {
//     id: number;
//     name: string;
// }