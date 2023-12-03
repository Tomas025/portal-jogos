import { ReactNode } from 'react';

export type PrivateRouteProps = {
	children: ReactNode;
	type: 'aluno' | 'criadorConteudo' | null;
};
