import { parseCookies } from 'nookies';
import { api } from 'services/api';

export const checkUserAuthenticated = () => {
	const { 'portal-jogos.token': token } = parseCookies();

	if (token) {
		api.post('/auth/ValidateToken', { token }).then((response) => {
			if (response.data.status == 201) {
				return true;
			}
		});
	}

	return false;
};
