'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { PrivateRouteProps } from './type';

const queryClient = new QueryClient();

export const Providers = ({ children }: PrivateRouteProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<CacheProvider>
				<ChakraProvider>{children}</ChakraProvider>
			</CacheProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
