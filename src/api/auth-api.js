import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://project-seventeam07.onrender.com/api',
});

export const setToken = (token) => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signupRequest = async (body) => {
  const { data } = await authInstance.post('/users/register', body);
  setToken(data.token);
  return data;
};

export const loginRequest = async (body) => {
  const { data } = await authInstance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const currentRequest = async (token) => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const { data } = await authInstance.post('/users/logout');
  setToken();
  return data;
};

export const sendHelpRequest = async (formData) => {
  try {
    const response = await authInstance.post('/users/help', formData);
    return response.data;
  } catch (error) {
    throw new Error('Error sending help request');
  }
};

export const sendUpdateRequest = async (formData) => {
  try {
    const response = await authInstance.patch('/users/update', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error sending updateUser request');
  }
};

export default authInstance;
