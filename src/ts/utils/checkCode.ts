const checkResponseCode = async (res: Response) => {
  const json = await res.json();
  if (res.status >= 400) throw new Error(json.msg);
  return json;
};

export default checkResponseCode;
