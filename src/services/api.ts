import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
	baseURL: 'http://localhost:3333'
});

const myUser = Cookies.get('user');

if (myUser) {
	api.defaults.headers['Authorization'] = `Bearer ${myUser}`;
}
