import axios from 'axios';

axios.defaults.baseURL = 'https://63f5d6d959c944921f67858f.mockapi.io';

export async function getBooks(params) {
  return await axios.get(`/users`, { params });
}
