var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { $, removeChildren } from './utils/domFunctions.js';
import newSpecialtyComponent from './components/Specialty.js';
import getSpecialties from './services/getSpecialties.js';
import getPatients from './services/getPatients.js';
import newPatientComponent from './components/Patient.js';
const divContent = $('#content'), specialtyBtn = $('#sp-btn'), patientBtn = $('#pt-btn');
specialtyBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const specialties = yield getSpecialties();
    removeChildren(divContent);
    specialties.forEach((specialty) => {
        const specialtyDiv = newSpecialtyComponent(specialty);
        divContent.appendChild(specialtyDiv);
    });
}));
patientBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const patients = yield getPatients();
    removeChildren(divContent);
    patients.forEach((patient) => {
        const patientDiv = newPatientComponent(patient);
        divContent.appendChild(patientDiv);
    });
}));
