import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../patients';

@Pipe({
  name: 'patientsFilter',
})
export class PatientsFilterPipe implements PipeTransform {

  transform(value: Patient[], column: string, filterBy: string): Patient[] {
    console.log(value, column, filterBy)
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((patient: Patient) =>
      patient[`${column}`].toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}