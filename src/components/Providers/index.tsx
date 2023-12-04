'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import { PrivateRouteProps } from './type';

export const Providers = ({ children }: PrivateRouteProps) => {
	return (
		<>
			<CacheProvider>
				<ChakraProvider>{children}</ChakraProvider>
			</CacheProvider>
		</>
	);
};
