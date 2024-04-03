'use client';
import { useState, useEffect } from 'react';

import { CardCursoEdit } from 'components/CardCursoEdit';
import { WithSubnavigation } from 'components/NavBar';
import { userProps } from 'components/ProfilePage/type';

import { Box, Flex, Heading } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { api } from 'services/api';

import { Pagination } from './Pagination';
import { Curso } from './type';

const meusCursos = [
	{
		Id: 1,
		Titulo: 'Curso de Programação em Python',
		Descricao: 'Aprenda Python do básico ao avançado.',
		XP: 100,
		Duracao: 30,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_python.jpg'
	},
	{
		Id: 2,
		Titulo: 'Curso de Desenvolvimento Web',
		Descricao: 'Construa sites modernos com HTML, CSS e JavaScript.',
		XP: 150,
		Duracao: 45,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_web.jpg'
	},
	{
		Id: 3,
		Titulo: 'Curso de Design Gráfico',
		Descricao: 'Crie designs incríveis com ferramentas populares.',
		XP: 120,
		Duracao: 60,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_design.jpg'
	},
	{
		Id: 4,
		Titulo: 'Curso de Programação em Python',
		Descricao: 'Aprenda Python do básico ao avançado.',
		XP: 100,
		Duracao: 30,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_python.jpg'
	},
	{
		Id: 5,
		Titulo: 'Curso de Desenvolvimento Web',
		Descricao: 'Construa sites modernos com HTML, CSS e JavaScript.',
		XP: 150,
		Duracao: 45,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_web.jpg'
	},
	{
		Id: 3,
		Titulo: 'Curso de Design Gráfico',
		Descricao: 'Crie designs incríveis com ferramentas populares.',
		XP: 120,
		Duracao: 60,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_design.jpg'
	},
	{
		Id: 6,
		Titulo: 'Curso de Programação em Python',
		Descricao: 'Aprenda Python do básico ao avançado.',
		XP: 100,
		Duracao: 30,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_python.jpg'
	},
	{
		Id: 7,
		Titulo: 'Curso de Desenvolvimento Web',
		Descricao: 'Construa sites modernos com HTML, CSS e JavaScript.',
		XP: 150,
		Duracao: 45,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_web.jpg'
	},
	{
		Id: 8,
		Titulo: 'Curso de Design Gráfico',
		Descricao: 'Crie designs incríveis com ferramentas populares.',
		XP: 120,
		Duracao: 60,
		CriadorId: 3,
		UrlThumbnail: 'url_thumbnail_design.jpg'
	}
];

export default function ListCursosPage() {
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;

	const myUser = Cookies.get('user');
	const user = () => {
		if (myUser) {
			return jwtDecode<userProps>(myUser!);
		} else {
			return null;
		}
	};

	const fetchCursos = async () => {
		setLoading(true);
		setError(false);
		try {
			const response = await api.get(
				`/cursos/${currentPage}/${itemsPerPage}`
			);
			setCursos(response.data.cursos);
		} catch (error) {
			console.error(error);
			// setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user()) {
			fetchCursos();
		}
	}, [user(), currentPage]);

	return (
		<Box
			height={'400vh'}
			background="linear-gradient(to bottom, #000000, #401336)"
		>
			<WithSubnavigation />
			<Flex
				width={'110vw'}
				height={'125vh'}
				flexDirection={'column'}
				justifyContent={'start'}
				alignItems={'start'}
				paddingLeft={120}
			>
				<Flex justifyContent={'start'} flexDir={'column'} gap={15}>
					<Heading
						borderBottom={'10px solid #B530F3'}
						fontSize={'70px'}
						color={'#FFFFFF'}
						width={'min-content'}
					>
						Explorar
					</Heading>
					<Box mt={5}>
						{loading && <p>Loading...</p>}
						{error && <p>Erro ao carregar os cursos</p>}
						{!loading && !error && (
							<>
								{meusCursos.map((curso) => (
									<CardCursoEdit
										curso={curso}
										key={curso.Id}
									/>
								))}
								<Pagination
									numPages={20}
									getCourses={setCurrentPage}
								/>
							</>
						)}
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}
