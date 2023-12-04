import axios from 'axios';
// import { parseCookies } from 'nookies';

export const api = axios.create({
	baseURL: 'http://localhost:3333'
});

// const { 'portal-jogos.token': token } = parseCookies();

// if (token) {
// 	api.defaults.headers['Authorization'] = `Bearer ${token}`;
// }
