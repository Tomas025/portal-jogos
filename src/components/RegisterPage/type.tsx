export enum types {
	ALUNO = 'aluno',
	CRIADOR_CONTEUDO = 'criador'
}

export type RegisterFormProps = {
	userName: string;
	tagName: string;
	email: string;
	type: types;
	password: string;
	repeatPassword: string;
};
