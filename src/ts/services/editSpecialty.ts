import checkResponseCode from '../utils/checkCode.js';

const editSpecialty = (id: number, name: string, pic: string) => {
  const params = { name, pic };

  const url = new URL(`http://localhost:8080/specialty/update/${id}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value.length) url.searchParams.append(key, value);
  });

  return fetch(url, { method: 'PUT' }).then(async (r) => checkResponseCode(r));
};

export default editSpecialty;
