import { $, createEl } from '../utils/domFunctions.js';
import createPatient from '../services/createPatient.js';
const newPatientForm = () => {
    const modal = createEl({
        tag: 'dialog',
        attributes: {
            id: `modal-new-usr`,
            class: 'modal'
        }
    });
    const title = createEl({
        tag: 'h1',
        text: 'Pacitient Values',
        attributes: {
            id: 'modal-new-title'
        }
    });
    const form = createEl({
        tag: 'form',
        attributes: {
            id: `new-form`,
            method: 'dialog',
            class: 'form-edit'
        }
    });
    const inputName = createEl({
        tag: 'input',
        attributes: {
            id: 'inputName',
            placeholder: 'Pacient name'
        }
    });
    const inputAge = createEl({
        tag: 'input',
        attributes: {
            id: 'inputAge',
            placeholder: 'Patient age',
            type: 'number',
            min: 0
        }
    });
    const inputDNI = createEl({
        tag: 'input',
        attributes: {
            id: 'inputIdentificationNumber',
            placeholder: 'Patient DNI',
            type: 'number',
            min: 0
        }
    });
    const submitBtn = createEl({
        tag: 'button',
        text: 'Save',
        attributes: {
            id: 'sub-edit-btn',
            type: 'submit',
            class: 'btn'
        }
    });
    submitBtn.addEventListener('click', () => {
        const name = inputName.value;
        const age = Number(inputAge.value);
        const DNI = Number(inputDNI.value);
        const nameLen = name.length;
        if (nameLen && (nameLen < 10 || nameLen > 45)) {
            inputName.classList.add('border-red-500');
        }
        else
            inputName.classList.remove('border-red-500');
        createPatient(name, age, DNI)
            .then(() => {
            $('#pt-btn').click();
            inputName.value = '';
            inputAge.value = '';
            inputDNI.value = '';
        })
            .catch((err) => {
            console.error(err);
            alert(err);
        });
    });
    form.append(inputName, inputDNI, inputAge, submitBtn);
    modal.append(title, form);
    return modal;
};
export default newPatientForm;
