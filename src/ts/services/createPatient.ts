import checkResponseCode from '../utils/checkCode.js';

const createPatient = (
  name: string,
  age: number,
  identificationNumber: number
) => {
  const body = JSON.stringify({
    name: !name.length ? null : name,
    age: !age ? null : age,
    identificationNumber: !identificationNumber ? null : identificationNumber
  });

  return fetch('http://localhost:8080/patient', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  }).then((r) => checkResponseCode(r));
};

export default createPatient;
