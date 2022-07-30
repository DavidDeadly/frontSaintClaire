import editSpecialty from '../services/editSpecialty.js';
import { $, createEl } from '../utils/domFunctions.js';
const newEditForm = (id) => {
    const modal = createEl({
        tag: 'dialog',
        attributes: {
            id: `modal-edit-${id}`,
            class: 'modal-edit'
        }
    });
    const title = createEl({
        tag: 'h1',
        text: 'New Specialty Values',
        attributes: {
            id: 'modal-edit-title'
        }
    });
    const editForm = createEl({
        tag: 'form',
        attributes: {
            id: `edit-form-${id}`,
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
    });
    const spInput = createEl({
        tag: 'input',
        attributes: {
            id: 'inputSpecialist',
            placeholder: 'Specialist name'
        }
    });
    const submitBtn = createEl({
        tag: 'button',
        text: 'Save',
        attributes: {
            id: 'modal-submit-btn',
            type: 'submit',
            class: 'btn'
        }
    });
    submitBtn.addEventListener('click', () => {
        const name = inputName.value;
        const picName = spInput.value;
        const nameLen = name.length;
        if (nameLen && (nameLen < 5 || nameLen > 100)) {
            inputName.classList.add('border-red-500');
        }
        else
            inputName.classList.remove('border-red-500');
        const picNameLen = picName.length;
        if (picNameLen && (picNameLen < 10 || picNameLen > 45)) {
            spInput.classList.add('border-red-500');
        }
        else
            spInput.classList.remove('border-red-500');
        editSpecialty(id, name, picName)
            .then(() => {
            $('#sp-btn').click();
            inputName.value = '';
            spInput.value = '';
        })
            .catch((err) => {
            console.error(err);
            alert(err);
        });
        modal.close();
    });
    editForm.append(inputName, spInput, submitBtn);
    modal.append(title, editForm);
    return modal;
};
export default newEditForm;
