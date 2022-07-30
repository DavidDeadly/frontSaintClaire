import { CreateStatus, createStatusE } from '../utils/createStatus.js';
import { $, createEl } from '../utils/domFunctions.js';
import newPatientForm from './newPatientForm.js';
import newSpecialtyForm from './newSpecialtyForm.js';

const newEntity = (getStatus: () => CreateStatus) => {
  const entity = getStatus();

  const Btn = createEl({
    tag: 'button',
    text: `New ${entity}`,
    attributes: {
      id: 'new-btn',
      class: 'btn'
    }
  });

  const modalForm =
    entity === createStatusE.specialty ? newSpecialtyForm(0) : newPatientForm();

  Btn.addEventListener('click', () => {
    if (modalForm) {
      $('#app')?.append(modalForm);
      modalForm.showModal();
    }
  });

  return Btn;
};

export default newEntity;
