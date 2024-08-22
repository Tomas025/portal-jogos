import { userProps } from 'components/ProfilePage/type';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export function getToken(): userProps | null {
	const myUser = Cookies.get('user');
	if (myUser) {
		return jwtDecode(myUser!);
	}
	return null;
}
