import { NextRequest, NextResponse } from 'next/server';

import { api } from 'services/api';

export default function middleware(request: NextRequest) {
	// const token = request.cookies.get('user')?.value;
	// const sigInURL = new URL('/login', request.url);

	// if (token) {
	// 	api.post('/auth/ValidateToken', { access_token: token })
	// 		.then((response) => {
	// 			if (response.data.status == 201) {
	return NextResponse.next();
	// 			}
	// 		})
	// 		.catch(() => {
	// 			return NextResponse.redirect(sigInURL);
	// 		});
	// } else {
	// 	return NextResponse.redirect(sigInURL);
	// }
}

// export const config = {
// 	matcher: [
// 		'/profile',
// 		'/dashboard',
// 		'/listCursos',
// 		'/class/:path*',
// 		'/myCourses'
// 	]
// };
