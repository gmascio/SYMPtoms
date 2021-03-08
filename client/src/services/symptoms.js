import api from './api-config';

export const getAllIllnesses = async () => {
  const resp = await api.get('/illnesses');
  return resp.data;
}

export const getOneIllness = async (id) => {
  const resp = await api.get(`/illnesses/${id}`);
  return resp.data;
}

export const postIllness = async (illnessData) => {
  const resp = await api.post('/Illnesses', { illness: illnessData });
  return resp.data;
}

export const putIllness = async (id, illnessData) => {
  const resp = await api.put(`/illnesses/${id}`, { illness: illnessData });
  return resp.data;
}

export const destroyIllness = async (id) => {
  const resp = await api.delete(`/illnesses/${id}`);
  return resp;
}