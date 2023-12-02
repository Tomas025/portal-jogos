'use client';
import { useState, useEffect } from 'react';

import CardCurso from 'components/CardCurso';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { api } from 'services/api';

import { Curso } from './type';

// const courses: Curso[] = [
// 	{
// 		Id: 1,
// 		Titulo: 'Desenvolvimento de jogos 2D em Unity',
// 		Descricao:
// 			'O curso "Desenvolvimento de Jogos 2D em Unity" é uma jornada emocionante no mundo da criação de jogos, projetada para aspirantes a desenvolvedores de jogos e entusiastas da indústria de games. Neste curso envolvente, você aprenderá a usar a poderosa plataforma Unity para desenvolver jogos 2D envolventes, explorando desde os conceitos básicos até técnicas avançadas. Ao final do curso, você estará equipado com o conhecimento e as habilidades necessárias para desenvolver seus próprios jogos 2D criativos e emocionantes, prontos para compartilhar com o mundo ou até mesmo iniciar sua carreira na indústria de desenvolvimento de jogos. Prepare-se para liberar sua imaginação e transformar suas ideias em realidade no emocionante universo dos jogos 2D em Unity',
// 		CriadorId: 1,
// 		Duracao: 100,
// 		XP: 100
// 	},
// 	{
// 		Id: 2,
// 		Titulo: 'Desenvolvimento de jogos 2D em Unity',
// 		Descricao:
// 			'O curso "Desenvolvimento de Jogos 2D em Unity" é uma jornada emocionante no mundo da criação de jogos, projetada para aspirantes a desenvolvedores de jogos e entusiastas da indústria de games. Neste curso envolvente, você aprenderá a usar a poderosa plataforma Unity para desenvolver jogos 2D envolventes, explorando desde os conceitos básicos até técnicas avançadas. Ao final do curso, você estará equipado com o conhecimento e as habilidades necessárias para desenvolver seus próprios jogos 2D criativos e emocionantes, prontos para compartilhar com o mundo ou até mesmo iniciar sua carreira na indústria de desenvolvimento de jogos. Prepare-se para liberar sua imaginação e transformar suas ideias em realidade no emocionante universo dos jogos 2D em Unity',

// 		CriadorId: 1,
// 		Duracao: 100,
// 		XP: 100
// 	},
// 	{
// 		Id: 3,
// 		Titulo: 'Desenvolvimento de jogos 2D em Unity',
// 		Descricao:
// 			'O curso "Desenvolvimento de Jogos 2D em Unity" é uma jornada emocionante no mundo da criação de jogos, projetada para aspirantes a desenvolvedores de jogos e entusiastas da indústria de games. Neste curso envolvente, você aprenderá a usar a poderosa plataforma Unity para desenvolver jogos 2D envolventes, explorando desde os conceitos básicos até técnicas avançadas. Ao final do curso, você estará equipado com o conhecimento e as habilidades necessárias para desenvolver seus próprios jogos 2D criativos e emocionantes, prontos para compartilhar com o mundo ou até mesmo iniciar sua carreira na indústria de desenvolvimento de jogos. Prepare-se para liberar sua imaginação e transformar suas ideias em realidade no emocionante universo dos jogos 2D em Unity',

// 		CriadorId: 1,
// 		Duracao: 100,
// 		XP: 100
// 	}
// ];

export default function ListCursosPage() {
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await api.get('/cursos');
				setCursos(response.data);
			} catch (error) {
				console.error(error);
				setError(true);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<Box backgroundImage={"url('/img/bgHeroSection.png')"}>
			<Flex
				width={'100vw'}
				height={'100vh'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Flex justifyContent={'left'} flexDir={'column'} gap={4}>
					<Heading
						borderBottom={'10px solid #B530F3'}
						fontSize={'7.0625rem'}
						color={'#FFFFFF'}
						width={'min-content'}
					>
						Cursos
					</Heading>
					{loading && <p>Loading...</p>}
					{error && <p>Erro ao carregar os cursos</p>}
					{!loading && !error && (
						<>{cursos.map((curso) => CardCurso(curso))}</>
					)}
				</Flex>
			</Flex>
		</Box>
	);
}
