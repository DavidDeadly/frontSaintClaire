import { $, createEl } from '../utils/domFunctions.js';
import { PacientDBI } from '../utils/interfaces.js';
import deletePatientAppointments from '../services/deletePatientAppointments.js';

const newListPatients = (id: number, patients: Array<PacientDBI>) => {
  const modal = createEl({
    tag: 'dialog',
    attributes: {
      id: `modal-edit-${id}`,
      class: 'modal'
    }
  }) as HTMLDialogElement;

  const title = createEl({
    tag: 'h1',
    text: 'Patients : N°Dates',
    attributes: {
      id: 'modal-dates-title'
    }
  });

  const list = createEl({
    tag: 'ol',
    attributes: {
      id: `dates-list-${id}`,
      class: 'dates'
    }
  });

  patients.forEach((patient) => {
    const liDate = createEl({
      tag: 'li',
      text: `[${patient.name}-${patient.identificationNumber}] : ${patient.numberOfAppointments}`,
      attributes: {
        id: `pt${patient.id}`,
        class: 'patient'
      }
    });

    liDate.addEventListener('click', () => {
      deletePatientAppointments(patient.id)
        .then(() => ($('#sp-btn') as HTMLElement).click())
        .catch((err) => {
          console.error(err);
          alert(err);
        });
    });

    list.append(liDate);
  });

  const closeBtn = createEl({
    tag: 'button',
    text: 'Close',
    attributes: {
      id: 'pt-cls-btn',
      class: 'btn'
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  modal.append(title, list, closeBtn);

  return modal;
};

export default newListPatients;
