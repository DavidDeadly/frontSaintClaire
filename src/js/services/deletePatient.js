import checkResponseCode from '../utils/checkCode.js';
const deletePatient = (id) => fetch(`http://localhost:8080/patient/${id}`, { method: 'DELETE' })
    .then(async (r) => checkResponseCode(r))
    .catch((err) => {
    alert(err);
    console.error(err);
});
export default deletePatient;
