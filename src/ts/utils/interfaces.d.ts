export interface domElI {
  tag: string;
  text?: string;
  attributes: {
    id: string;
    class?: string;
  };
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
