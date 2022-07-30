import checkResponseCode from '../utils/checkCode.js';
const deleteSpecialty = (id) => fetch(`http://localhost:8080/specialty/${id}`, { method: 'DELETE' })
    .then(async (r) => checkResponseCode(r))
    .catch((err) => {
    alert(err);
    console.error(err);
});
export default deleteSpecialty;
