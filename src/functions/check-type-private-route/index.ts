import { APP_ROUTES } from 'constants/app-routes';

export const checkTypePrivateRoute = (pathname: string) => {
	const privateRoutesAluno = Object.values(APP_ROUTES.aluno);

	if (privateRoutesAluno.includes(pathname)) {
		return 'aluno';
	}

	const privateRoutesCriadorConteudo = Object.values(
		APP_ROUTES.criadorConteudo
	);

	if (privateRoutesCriadorConteudo.includes(pathname)) {
		return 'criadorConteudo';
	}

	return null;
};
