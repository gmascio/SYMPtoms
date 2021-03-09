import api from './api-config';

export const getAllIllnesses = async () => {
  const resp = await api.get('/illnesses');
  return resp.data;
}
export const getOneIllness = async (id) => {
  const resp = await api.get(`/illnesses/${id}`);
  return resp.data;
}