import { $, removeChildren } from './utils/domFunctions.js';
import newSpecialtyComponent from './components/Specialty.js';
import { PacientDBI, SpecialtyDBI } from './utils/interfaces.js';
import getSpecialties from './services/getSpecialties.js';
import getPatients from './services/getPatients.js';
import newPatientComponent from './components/Patient.js';

const divContent = $('#content') as HTMLElement,
  specialtyBtn = $('#sp-btn') as HTMLElement,
  patientBtn = $('#pt-btn') as HTMLElement;

specialtyBtn.addEventListener('click', async () => {
  const specialties = await getSpecialties();

  removeChildren(divContent);

  specialties.forEach(async (specialty: SpecialtyDBI) => {
    const specialtyDiv = await newSpecialtyComponent(specialty);
    divContent.appendChild(specialtyDiv);
  });
});

patientBtn.addEventListener('click', async () => {
  const patients = await getPatients();

  removeChildren(divContent);

  patients.forEach((patient: PacientDBI) => {
    const patientDiv = newPatientComponent(patient);
    divContent.appendChild(patientDiv);
  });
});
