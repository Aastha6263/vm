export const API_URL = "http://localhost:5000";

export const getData = async (endpoint) => {
  const res = await fetch(`${API_URL}/${endpoint}`);
  return res.json();
};
