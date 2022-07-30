import addPatient from '../services/addPatient.js';
import getPatients from '../services/getPatients.js';
import { createEl } from '../utils/domFunctions.js';
import { PacientDBI } from '../utils/interfaces.js';

const newModalSelectPatient = (id: number, allPatients: Array<PacientDBI>) => {
  const modal = createEl({
    tag: 'dialog',
    attributes: {
      id: `modal-sel-${id}`,
      class: 'modal'
    }
  }) as HTMLDialogElement;

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
  }) as HTMLSelectElement;

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
    const selectedOption = select.options.item(
      select.selectedIndex
    ) as HTMLOptionElement;
    addPatient(id, Number(selectedOption?.value))
      .then((r) => console.log(r))
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
