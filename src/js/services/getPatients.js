const getPatients = () => fetch('http://127.0.0.1:8080/patient')
    .then((res) => res.json())
    .catch((err) => console.error(err));
export default getPatients;
