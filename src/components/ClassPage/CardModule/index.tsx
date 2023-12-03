'use client';
import { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { api } from 'services/api';

type Modulo = {
	Id: number;
	Titulo: string;
	Descricao: string;
	Sequencia: number;
	fkCursoId: number;
	aulas: Aula[];
};

type Aula = {
	Id: number;
	Descricao: string;
	XP: number;
	UrlVideo: string;
	Duracao: number;
	fk_modulo_id: number;
	Sequencia: number;
};

type DataFormated = {
	idCurso: number;
	Titulo: string;
	modulos: Modulo[];
};

const exemploAulas: Aula[] = [
	{
		Id: 1,
		Descricao: 'Introdução ao Curso',
		XP: 10,
		UrlVideo: 'https://www.youtube.com/watch?v=exemplo',
		Duracao: 15,
		fk_modulo_id: 1,
		Sequencia: 1
	},
	{
		Id: 2,
		Descricao: 'Conceitos Avançados',
		XP: 20,
		UrlVideo: 'https://www.youtube.com/watch?v=exemplo2',
		Duracao: 20,
		fk_modulo_id: 1,
		Sequencia: 2
	},
	{
		Id: 3,
		Descricao: 'Prática com Exemplos',
		XP: 15,
		UrlVideo: 'https://www.youtube.com/watch?v=exemplo3',
		Duracao: 25,
		fk_modulo_id: 2,
		Sequencia: 1
	}
	// Adicione mais aulas conforme necessário
];

const exemploModulos: Modulo[] = [
	{
		Id: 1,
		Titulo: 'Módulo 1 - Conceitos Básicos',
		Descricao: 'Este módulo aborda os conceitos fundamentais.',
		Sequencia: 1,
		fkCursoId: 1,
		aulas: exemploAulas.filter((aula) => aula.fk_modulo_id === 1)
	},
	{
		Id: 2,
		Titulo: 'Módulo 2 - Prática Avançada',
		Descricao: 'Este módulo prático explora conceitos avançados.',
		Sequencia: 2,
		fkCursoId: 1,
		aulas: exemploAulas.filter((aula) => aula.fk_modulo_id === 2)
	}
	// Adicione mais módulos conforme necessário
];

const dadosExemplo: DataFormated = {
	idCurso: 1,
	Titulo: 'Curso de Exemplo',
	modulos: exemploModulos
};

export default function CardModule() {
	const [modulos, setModulos] = useState<Modulo[]>();
	const [aulas, setAulas] = useState<Modulo[]>();
	const [dataFormated, setDataFormated] = useState<DataFormated>();

	async function montarObjetoDataFormated(
		cursoId: number
	): Promise<DataFormated | null> {
		try {
			// Obter os módulos do curso
			const modulosResponse = await api.get(
				`/modulos/cursoId/${cursoId}`
			);
			const modulos: Modulo[] = modulosResponse.data;

			// Montar a lista de aulas para cada módulo
			const modulosComAulas = await Promise.all(
				modulos.map(async (modulo) => {
					const aulasResponse = await api.get(
						`/aulas/moduloId/${modulo.Id}`
					);
					const aulas: Aula[] = aulasResponse.data;
					return { ...modulo, aulas };
				})
			);

			// Construir o objeto DataFormated
			const dataFormated: DataFormated = {
				idCurso: cursoId,
				Titulo: 'Título do Curso', // Substitua com o título real do curso
				modulos: modulosComAulas
			};

			return dataFormated;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	useEffect(() => {
		(async () => {
			montarObjetoDataFormated(3)
				.then((dataFormated) => {
					if (dataFormated) {
						setDataFormated(dataFormated);
						console.log(dataFormated);
					} else {
						console.log('Erro ao obter dados do curso.');
					}
				})
				.catch((error) => console.error(error));
		})();
	}, []);

	return (
		<>
			<Flex
				width={'31.4375rem'}
				height={'50.6875rem'}
				rounded={'21px'}
				bg={'#120E27'}
			></Flex>
		</>
	);
}

function CardAulas() {
	return (
		<>
			<Flex
				width={'31.4375rem'}
				height={'50.6875rem'}
				rounded={'21px'}
				bg={'#120E27'}
			></Flex>
		</>
	);
}
