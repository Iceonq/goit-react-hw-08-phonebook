import axios from 'axios';

axios.defaults.baseURL = 'https://64510221a322196911580575.mockapi.io';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
