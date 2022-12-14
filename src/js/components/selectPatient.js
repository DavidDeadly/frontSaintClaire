import addPatient from '../services/addPatient.js';
import { $, createEl } from '../utils/domFunctions.js';
const newModalSelectPatient = (id, allPatients) => {
    const modal = createEl({
        tag: 'dialog',
        attributes: {
            id: `modal-sel-${id}`,
            class: 'modal'
        }
    });
    const selectForm = createEl({
        tag: 'form',
        attributes: {
            id: `sel-form-${id}`,
            class: 'form-edit',
            method: 'dialog'
        }
    });
    const label = createEl({
        tag: 'label',
        text: 'Select a Pacient',
        attributes: {
            id: 'modal-sel-title',
            for: `select-pt-${id}`
        }
    });
    const select = createEl({
        tag: 'select',
        attributes: {
            id: `select-pt-${id}`
        }
    });
    const dfOption = createEl({
        tag: 'option',
        text: 'Choose a patient',
        attributes: {
            id: 'df-option',
            value: '0',
            disabled: true,
            selected: true
        }
    });
    select.append(dfOption);
    allPatients.forEach((patient) => {
        const option = createEl({
            tag: 'option',
            text: `${patient.name} - ${patient.identificationNumber}`,
            attributes: {
                id: `pt-option-${patient.id}`,
                value: String(patient.id)
            }
        });
        select.append(option);
    });
    const submitBtn = createEl({
        tag: 'button',
        text: 'Save',
        attributes: {
            id: 'submit-sel-btn',
            type: 'submit',
            class: 'btn'
        }
    });
    submitBtn.addEventListener('click', () => {
        const selectedOption = select.options.item(select.selectedIndex);
        addPatient(id, Number(selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value))
            .then(() => $('#sp-btn').click())
            .finally(() => {
            modal.close();
            modal.remove();
        });
    });
    selectForm.append(label, select, submitBtn);
    modal.append(selectForm);
    return modal;
};
export default newModalSelectPatient;
