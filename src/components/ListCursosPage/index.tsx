'use client';
import { useState, useEffect } from 'react';

import { Container } from '@chakra-ui/react';
// import { api } from 'services/api';

import { Curso } from './type';
import CardCurso from 'components/CardCurso';

const courses: Curso[] = [
	{
		Id: 1,
		Titulo: 'Desenvolvimento de jogos 2D em Unity',
		Descricao: 'Aprenda a planejar seu jogo de forma eficiente.',
		CriadorId: 1,
		Duracao: 100,
		XP: 100
	},
	{
		Id: 2,
		Titulo: 'Desenvolvimento de jogos 2D em Unity',
		Descricao: 'Aprenda a desenvolver seu jogo de forma eficiente.',
		CriadorId: 1,
		Duracao: 100,
		XP: 100
	},
	{
		Id: 3,
		Titulo: 'Desenvolvimento de jogos 2D em Unity',
		Descricao: 'Aprenda a publicar seu jogo de forma eficiente.',
		CriadorId: 1,
		Duracao: 100,
		XP: 100
	}
];

export default function ListCursosPage() {
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				// const response = await api.get('/cursos');
				setCursos(courses);
			} catch (error) {
				console.error(error);
				setError(true);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<Container>
			{loading && <p>Loading...</p>}
			{error && <p>Erro ao carregar os cursos</p>}
			{!loading && !error && (
				<>{cursos.map((curso) => CardCurso(curso))}</>
			)}
		</Container>
	);
}
