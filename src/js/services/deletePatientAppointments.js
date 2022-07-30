import checkResponseCode from '../utils/checkCode.js';
const deletePatientAppointments = (id) => fetch(`http://localhost:8080/patient/${id}`, { method: 'PUT' }).then((r) => checkResponseCode(r));
export default deletePatientAppointments;
