import checkResponseCode from '../utils/checkCode.js';

const createSpecialty = (name: string, physicianInCharge: string) => {
  const body = JSON.stringify({
    name: !name.length ? null : name,
    physicianInCharge: !physicianInCharge.length ? null : name
  });

  return fetch('http://localhost:8080/specialty', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  }).then((r) => checkResponseCode(r));
};

export default createSpecialty;