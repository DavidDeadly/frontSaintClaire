export interface attributesI {
  id: string;
  class?: string;
  type?: string;
  method?: string;
  placeholder?: string;
  for?: string;
  style?: string;
}

export interface domElI {
  tag: string;
  text?: string;
  attributes: attributesI;
}

export interface PacientI {
  id: number;
  name: string;
  age: number;
}
export interface SpecialtyI {
  id: number;
  name: string;
  physicianInCharge: string;
}

export interface PacientDBI extends PacientI {
  identificationNumber: number;
  datesAppointments: Array<string>;
  numberOfAppointments: number;
}

export interface SpecialtyDBI extends SpecialtyI {
  patients: Array<PacientDBI>;
}
