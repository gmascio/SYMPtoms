import api from './api-config';

export const getAllSymptoms = async () => {
  const resp = await api.get('/symptoms');
  return resp.data;
}

export const getOneSymptom = async (id) => {
  const resp = await api.get(`/symptoms/${id}`);
  return resp.data;
}

export const postSymptom = async (symptomData) => {
  const resp = await api.post('/symptoms', { symptom: symptomData });
  return resp.data;
}

export const putSymptom = async (id, symptomData) => {
  const resp = await api.put(`/symptoms/${id}`, { symptom: symptomData });
  return resp.data;
}

export const destroySymptom = async (id) => {
  const resp = await api.delete(`/symptoms/${id}`);
  return resp;
}