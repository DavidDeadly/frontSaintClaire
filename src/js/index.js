import { $, removeChildren } from './utils/domFunctions.js';
import newSpecialtyComponent from './components/Specialty.js';
import getSpecialties from './services/getSpecialties.js';
import getPatients from './services/getPatients.js';
import newPatientComponent from './components/Patient.js';
import generateStatusApp, { createStatusE } from './utils/createStatus.js';
import newEntity from './components/NewEntity.js';
const divContent = $('#content'), specialtyBtn = $('#sp-btn'), patientBtn = $('#pt-btn');
const { setStatus, getStatus } = generateStatusApp();
specialtyBtn.addEventListener('click', async () => {
    const specialties = await getSpecialties();
    setStatus(createStatusE.specialty);
    removeChildren(divContent);
    specialties.forEach(async (specialty) => {
        const specialtyDiv = await newSpecialtyComponent(specialty);
        divContent.appendChild(specialtyDiv);
    });
    const newBtn = newEntity(getStatus);
    divContent.append(newBtn);
});
patientBtn.addEventListener('click', async () => {
    const patients = await getPatients();
    setStatus(createStatusE.patient);
    removeChildren(divContent);
    patients.forEach((patient) => {
        const patientDiv = newPatientComponent(patient);
        divContent.appendChild(patientDiv);
    });
    const newBtn = newEntity(getStatus);
    divContent.append(newBtn);
});
