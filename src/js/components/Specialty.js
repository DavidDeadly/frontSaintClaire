import deleteSpecialty from '../services/deleteSpecialty.js';
import { createEl } from '../utils/domFunctions.js';
const newSpecialtyComponent = ({ id, name, physicianInCharge, patients }) => {
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
            id: `sp-del-btn-${id}`
        }
    });
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteSpecialty(id).then(() => spDiv.remove());
    });
    spDiv.append(spName, picName, deleteBtn);
    return spDiv;
};
export default newSpecialtyComponent;
