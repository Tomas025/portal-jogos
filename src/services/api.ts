import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
	baseURL: 'http://0.tcp.sa.ngrok.io:18187'
});

const myUser = Cookies.get('user');

if (myUser) {
	api.defaults.headers['Authorization'] = `Bearer ${myUser}`;
}
