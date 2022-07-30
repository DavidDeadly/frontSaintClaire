import { $, removeChildren } from './utils/domFunctions.js';
import newSpecialtyComponent from './components/Specialty.js';
import getSpecialties from './services/getSpecialties.js';
import getPatients from './services/getPatients.js';
import newPatientComponent from './components/Patient.js';
const divContent = $('#content'), specialtyBtn = $('#sp-btn'), patientBtn = $('#pt-btn');
specialtyBtn.addEventListener('click', async () => {
    const specialties = await getSpecialties();
    removeChildren(divContent);
    specialties.forEach(async (specialty) => {
        const specialtyDiv = await newSpecialtyComponent(specialty);
        divContent.appendChild(specialtyDiv);
    });
});
patientBtn.addEventListener('click', async () => {
    const patients = await getPatients();
    removeChildren(divContent);
    patients.forEach((patient) => {
        const patientDiv = newPatientComponent(patient);
        divContent.appendChild(patientDiv);
    });
});
