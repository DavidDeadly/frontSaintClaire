import checkResponseCode from '../utils/checkCode.js';

const addPatient = (specialtyId: number, patientId: number) => {
  const curDate = new Date();
  const date = `${curDate.getFullYear()}-${curDate.getMonth()}-${curDate.getDate()}`;
  const params = { patientId, date };

  const url = new URL(`http://localhost:8080/specialty/${specialtyId}`);

  Object.entries(params).forEach(([key, value]) => {
    if (String(value).length) url.searchParams.append(key, String(value));
  });

  console.log(url.toString());

  return fetch(url, { method: 'PUT' })
    .then((r) => checkResponseCode(r))
    .catch((err) => {
      console.error(err);
      alert(err);
    });
};

export default addPatient;
