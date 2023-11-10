'use client';

import { usePathname } from 'next/navigation';

import { checkIsPublicRoute } from 'functions/check-is-public-route';

import { Encapsulation } from './Encapsulation';
import { PrivateRouteProps } from './type';

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const pathname = usePathname();

	const isPublicPage = checkIsPublicRoute(pathname);

	return (
		<>
			{isPublicPage && children}
			{!isPublicPage && <Encapsulation>{children}</Encapsulation>}
		</>
	);
};
