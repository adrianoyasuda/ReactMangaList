import axios from 'axios';

const api = axios.create({
    baseURL: 'http://jonatassn.servegame.com/api'
});

export default api;