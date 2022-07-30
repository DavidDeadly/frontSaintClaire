const deleteSpecialty = (id: number) =>
  fetch(`http://localhost:8080/specialty/${id}`, { method: 'DELETE' })
    .then(async (r) => {
      const json = await r.json();
      if (r.status >= 400) throw new Error(json.msg);
      return json;
    })
    .catch((err) => {
      alert(err);
      console.error(err);
    });

export default deleteSpecialty;
