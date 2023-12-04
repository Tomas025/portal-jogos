export type Aula = {
	Id: number;
	Descricao: string;
	XP: number;
	UrlVideo: string;
	Duracao: number;
	fk_modulo_id: number;
	Sequencia: number;
};

export type Modulo = {
	Id: number;
	Titulo: string;
	Descricao: string;
	Sequencia: number;
	fkCursoId: number;
};
