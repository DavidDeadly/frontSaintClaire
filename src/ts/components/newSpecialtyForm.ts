import createSpecialty from '../services/createSpecialty.js';
import editSpecialty from '../services/editSpecialty.js';
import { $, createEl } from '../utils/domFunctions.js';

const newSpecialtyForm = (id: number) => {
  const isNew = !id;

  const modal = createEl({
    tag: 'dialog',
    attributes: {
      id: !isNew ? `modal-edit-${id}` : `modal-new`,
      class: 'modal'
    }
  }) as HTMLDialogElement;

  const title = createEl({
    tag: 'h1',
    text: !isNew ? 'New Specialty Values' : 'Specialty Values',
    attributes: {
      id: !isNew ? 'modal-edit-title' : 'modal-new-title'
    }
  });

  const form = createEl({
    tag: 'form',
    attributes: {
      id: !isNew ? `edit-form-${id}` : `new-form`,
      method: 'dialog',
      class: 'form-edit'
    }
  });

  const inputName = createEl({
    tag: 'input',
    attributes: {
      id: 'inputName',
      placeholder: 'Specialty name'
    }
  }) as HTMLInputElement;

  const spInput = createEl({
    tag: 'input',
    attributes: {
      id: 'inputSpecialist',
      placeholder: 'Specialist name'
    }
  }) as HTMLInputElement;

  const submitBtn = createEl({
    tag: 'button',
    text: !isNew ? 'Save' : 'Create',
    attributes: {
      id: !isNew ? 'sub-edit-btn' : 'sub-new-btn',
      type: 'submit',
      class: 'btn'
    }
  });

  submitBtn.addEventListener('click', () => {
    const name: string = inputName.value;
    const picName: string = spInput.value;

    const nameLen = name.length;
    if (nameLen && (nameLen < 5 || nameLen > 100)) {
      inputName.classList.add('border-red-500');
    } else inputName.classList.remove('border-red-500');

    const picNameLen = picName.length;

    if (picNameLen && (picNameLen < 10 || picNameLen > 45)) {
      spInput.classList.add('border-red-500');
    } else spInput.classList.remove('border-red-500');

    (isNew ? createSpecialty(name, picName) : editSpecialty(id, name, picName))
      .then(() => {
        ($('#sp-btn') as HTMLElement).click();
        inputName.value = '';
        spInput.value = '';
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      })
      .finally(() => {
        modal.close();
        isNew && modal.remove();
      });
  });

  form.append(inputName, spInput, submitBtn);

  modal.append(title, form);

  return modal;
};

export default newSpecialtyForm;
