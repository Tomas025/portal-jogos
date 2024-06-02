import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const api = axios.create({
	baseURL: 'https://17f2-179-127-38-135.ngrok-free.app'
});

const myUser = Cookies.get('user');
const myDecodeUser = jwtDecode(myUser!);

if (myUser) {
	api.defaults.headers['Authorization'] = `Bearer ${myUser}`;
}

axios.interceptors.request.use(
	function (config) {
		if (myUser) {
			if (myDecodeUser.exp! - Date.now() < 43200000) {
				axios
					.post('/auth/RefreshToken', { access_token: myUser })
					.then((response) => {
						Cookies.set('user', response.data.access_token, {
							expires: 1
						});
						config.headers.Authorization = `Bearer ${response.data.access_token}`;
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
		return config;
	},
	function (error) {
		// Faça algo com erro da solicitação
		return Promise.reject(error);
	}
);
