import { createStatusE } from '../utils/createStatus.js';
import { $, createEl } from '../utils/domFunctions.js';
import newSpecialtyForm from './newSpecialtyForm.js';
const newEntity = (getStatus) => {
    const entity = getStatus();
    const Btn = createEl({
        tag: 'button',
        text: `New ${entity}`,
        attributes: {
            id: 'new-btn',
            class: 'btn'
        }
    });
    const modalForm = entity === createStatusE.specialty
        ? newSpecialtyForm(0)
        : console.log('CREATE NEW PACIENT');
    Btn.addEventListener('click', () => {
        var _a;
        if (modalForm) {
            (_a = $('#app')) === null || _a === void 0 ? void 0 : _a.append(modalForm);
            modalForm.showModal();
        }
    });
    return Btn;
};
export default newEntity;
