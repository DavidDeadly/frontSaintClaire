import { $ } from './funcs/domFunctions.js';
const preTag = $('#content'), specialtyBtn = $('#sp-btn'), patientBtn = $('#pt-btn');
specialtyBtn.addEventListener('click', () => {
    fetch('http://127.0.0.1:8080/specialty')
        .then((res) => res.json())
        .then((res) => (preTag.innerText = JSON.stringify(res, null, 2)));
});
patientBtn.addEventListener('click', () => {
    fetch('http://127.0.0.1:8080/patient')
        .then((res) => res.json())
        .then((res) => (preTag.innerText = JSON.stringify(res, null, 2)));
});
