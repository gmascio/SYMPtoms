import api from './api-config';

export const getAllIllnesses = async () => {
  const resp = await api.get('/illnesses');
  return resp.data;
}