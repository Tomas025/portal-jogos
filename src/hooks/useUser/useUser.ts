import { useState } from 'react';

import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';

import { userProps } from './types';

export const useUser = () => {
	const { 'portal-jogos.token': token } = parseCookies();
	const [user, setUser] = useState<userProps | null>(null);

	if (token) {
		setUser(jwtDecode(token));
	}

	return { user };
};
