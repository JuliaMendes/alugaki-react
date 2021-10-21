import axios from 'axios';

const apiProdutos = axios.create({
  baseURL: 'http://localhost:3004'
});

export default apiProdutos;