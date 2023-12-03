import { useState } from 'react';

import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';
import { api } from 'services/api';

import { userProps } from './types';

export const useUser = () => {
	const { 'portal-jogos.token': token } = parseCookies();
	const [user, setUser] = useState<userProps | null>(null);
	const [authenticated, setAuthenticated] = useState(false);

	if (token) {
		setUser(jwtDecode(token));
		api.post('/auth/ValidateToken', { token })
			.then(() => {
				setAuthenticated(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return { user, authenticated };
};
