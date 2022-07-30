import deletePatient from '../services/deletePatient.js';
import { createEl } from '../utils/domFunctions.js';
import { PacientDBI } from '../utils/interfaces.js';

const newPatientComponent = ({
  id,
  name,
  age,
  identificationNumber,
  datesAppointments,
  numberOfAppointments
}: PacientDBI) => {
  const ptDiv = createEl({
    tag: 'div',
    attributes: {
      id: `cont-pt-${id}`,
      class: 'comp-div'
    }
  });

  const ptName = createEl({
    tag: 'h1',
    text: name,
    attributes: {
      id: `pt-name-${id}`
    }
  });

  const dni = createEl({
    tag: 'h2',
    text: `DNI: ${identificationNumber}`,
    attributes: {
      id: `pt-dni-${id}`
    }
  });

  const p = createEl({
    tag: 'p',
    text: `Age: ${age}`,
    attributes: {
      id: `pt-age-${id}`
    }
  });

  const deleteBtn = createEl({
    tag: 'button',
    text: 'x',
    attributes: {
      id: `pt-del-btn-${id}`,
      class: 'del-btn'
    }
  });

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deletePatient(id).then(() => ptDiv.remove());
  });

  ptDiv.append(ptName, dni, p, deleteBtn);

  return ptDiv;
};

export default newPatientComponent;
