import { createEl } from '../utils/domFunctions.js';
const createInputform = ({ id, placeholder }) => {
    const input = createEl({
        tag: 'input',
        attributes: {
            id,
            placeholder
        }
    });
    const label = createEl({
        tag: 'label',
        text: placeholder === null || placeholder === void 0 ? void 0 : placeholder.split(' ')[0],
        attributes: {
            id: `lb-${id}`,
            for: id
        }
    });
    return [label, input];
};
export default createInputform;
