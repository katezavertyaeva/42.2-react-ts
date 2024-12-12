export interface EmployeeFormValue {
  name: string
  surname: string
  age: string
  jobTitle: string
  agree: boolean
}

export enum EMPLOYEE_FIELD_NAMES {
  NAME = 'name',
  SURNAME = 'surname',
  AGE = 'age',
  JOB_TITLE = 'jobTitle',
  AGREEMENT = 'agree',
}