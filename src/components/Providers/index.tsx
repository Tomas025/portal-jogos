'use client';

import { usePathname } from 'next/navigation';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { checkIsPublicRoute } from 'functions/check-is-public-route';

import { PrivateRoute } from './PrivateRoute';
import { PrivateRouteProps } from './type';

export const Providers = ({ children }: PrivateRouteProps) => {
	const pathname = usePathname();

	const isPublicPage = checkIsPublicRoute(pathname);

	return (
		<>
			<CacheProvider>
				<ChakraProvider>
					{isPublicPage && children}
					{!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
				</ChakraProvider>
			</CacheProvider>
		</>
	);
};
