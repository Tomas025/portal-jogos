import { notFound, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { APP_ROUTES } from 'constants/app-routes';
import { checkUserAuthenticated } from 'functions/check-user-authenticated';
import { useUser } from 'hooks/useUser/useUser';

import { PrivateRouteProps } from '../type';

export const PrivateRoute = ({ children, type }: PrivateRouteProps) => {
	const { push } = useRouter();
	const { user } = useUser();

	const isUserAuthenticated = checkUserAuthenticated();

	useEffect(() => {
		if (!isUserAuthenticated) {
			push(APP_ROUTES.public.login);
		}
		if (
			type == null ||
			user == null ||
			(type == 'aluno' && user?.Tipo != 'Aluno') ||
			(type == 'criadorConteudo' && user?.Tipo != 'CriadorConteudo')
		) {
			notFound();
		}
	}, [isUserAuthenticated, user, type, push]);

	return (
		<>
			{!isUserAuthenticated && null}
			{isUserAuthenticated &&
				type == 'aluno' &&
				user?.Tipo == 'Aluno' &&
				children}
			{isUserAuthenticated &&
				type == 'criadorConteudo' &&
				user?.Tipo == 'CriadorConteudo' &&
				children}
		</>
	);
};
