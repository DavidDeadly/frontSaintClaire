const getSpecialties = () => fetch('http://127.0.0.1:8080/specialty')
    .then((res) => res.json())
    .catch((err) => console.error(err));
export default getSpecialties;
