import { createEl } from '../utils/domFunctions.js';
const newListOfAppointments = (id, datesAppointments) => {
    const modal = createEl({
        tag: 'dialog',
        attributes: {
            id: `modal-edit-${id}`,
            class: 'modal'
        }
    });
    const title = createEl({
        tag: 'h1',
        text: 'Appointments',
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
    datesAppointments.forEach((date, i) => {
        const liDate = createEl({
            tag: 'li',
            text: date,
            attributes: {
                id: `date${i + 1}-${id}`
            }
        });
        list.append(liDate);
    });
    const closeBtn = createEl({
        tag: 'button',
        text: 'Close',
        attributes: {
            id: 'sub-edit-btn',
            class: 'btn'
        }
    });
    closeBtn.addEventListener('click', () => {
        modal.close();
    });
    modal.append(title, list, closeBtn);
    return modal;
};
export default newListOfAppointments;
