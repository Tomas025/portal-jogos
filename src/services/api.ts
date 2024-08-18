import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const api = axios.create({
	baseURL: 'http://localhost:3333'
});

// const myUser = Cookies.get('user');
// const myDecodeUser = jwtDecode(myUser!);
// let isRefreshing = false;

// if (myUser) {
// 	api.defaults.headers['Authorization'] = `Bearer ${myUser}`;
// }

// api.interceptors.request.use(
// 	function (config) {
// 		if (myUser) {
// 			// alert('entrou');
// 			if (myDecodeUser.exp! - Date.now() < 43200000) {
// 				if (!isRefreshing) {
// 					isRefreshing = true;
// 					api.post('/auth/RefreshToken', { access_token: myUser })
// 						.then((response) => {
// 							Cookies.set('user', response.data.access_token, {
// 								expires: 1
// 							});
// 							config.headers.Authorization = `Bearer ${response.data.access_token}`;
// 						})
// 						.catch((error) => {
// 							console.log(error);
// 						});
// 				}
// 			}
// 		}
// 		return config;
// 	},
// 	function (error) {
// 		// Faça algo com erro da solicitação
// 		return Promise.reject(error);
// 	}
// );
