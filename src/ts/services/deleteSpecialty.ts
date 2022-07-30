import checkResponseCode from '../utils/checkCode.js';

const deleteSpecialty = (id: number) =>
  fetch(`http://localhost:8080/specialty/${id}`, { method: 'DELETE' }).then(
    async (r) => checkResponseCode(r)
  );

export default deleteSpecialty;
