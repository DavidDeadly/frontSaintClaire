import deleteSpecialty from '../services/deleteSpecialty.js';
import { createEl } from '../utils/domFunctions.js';
import { SpecialtyDBI } from '../utils/interfaces.js';
import newEditForm from './editForm.js';
import newModalSelectPatient from './selectPatient.js';
import getPatients from '../services/getPatients.js';

const newSpecialtyComponent = async ({
  id,
  name,
  physicianInCharge,
  patients
}: SpecialtyDBI) => {
  const spDiv = createEl({
    tag: 'div',
    attributes: {
      id: `cont-sp-${id}`,
      class: 'comp-div'
    }
  });

  const spName = createEl({
    tag: 'h1',
    text: name,
    attributes: {
      id: `sp-name-${id}`
    }
  });

  const picName = createEl({
    tag: 'h2',
    text: `Specialist: ${physicianInCharge}`,
    attributes: {
      id: `sp-pic-${id}`
    }
  });

  const deleteBtn = createEl({
    tag: 'button',
    text: 'x',
    attributes: {
      id: `sp-del-btn-${id}`,
      class: 'del-btn'
    }
  });

  const btnsDiv = createEl({
    tag: 'div',
    attributes: {
      id: `btns-${id}`,
      class: 'btns'
    }
  });

  const editBtn = createEl({
    tag: 'button',
    text: 'Edit',
    attributes: {
      id: `sp-edit-btn-${id}`,
      class: 'btn'
    }
  });

  const modalEdit = newEditForm(id);

  const addPacientBtn = createEl({
    tag: 'button',
    text: 'Add',
    attributes: {
      id: `sp-add-btn-${id}`,
      class: 'btn'
    }
  });

  addPacientBtn.addEventListener('click', async () => {
    const allPatients = await getPatients();
    const selectPatientModal = newModalSelectPatient(id, allPatients);
    spDiv.append(selectPatientModal);
    selectPatientModal.showModal();
  });

  editBtn.addEventListener('click', () => modalEdit.showModal());

  btnsDiv.append(editBtn, addPacientBtn);

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteSpecialty(id)
      .then(() => spDiv.remove())
      .catch((err) => {
        alert(err);
        console.error(err);
      });
  });

  spDiv.append(spName, picName, btnsDiv, deleteBtn, modalEdit);

  return spDiv;
};

export default newSpecialtyComponent;
