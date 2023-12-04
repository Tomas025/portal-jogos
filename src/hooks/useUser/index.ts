import { useState } from 'react';

import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';

import { userProps } from './type';

export const useUser = () => {
	const { 'portal-jogos.token': token } = parseCookies();
	const [user] = useState<userProps | null>(jwtDecode(token) || null);

	return { user };
};
