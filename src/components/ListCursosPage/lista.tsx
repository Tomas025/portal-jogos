'use client';
import { useState, useEffect } from 'react';

import { CardCursoEdit } from 'components/CardCursoEdit';
import { WithSubnavigation } from 'components/NavBar';
import { userProps } from 'components/ProfilePage/type';

import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { api } from 'services/api';

import { Curso } from './type';

import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';

export default function ListCursosPage() {
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	const nextPage = () => setCurrentPage(currentPage + 1);
	const prevPage = () => { if (currentPage !== 1) setCurrentPage(currentPage - 1) };

	const { 'portal-jogos.token': token } = parseCookies();
	const [user] = useState<userProps | null>(jwtDecode(token) || null);

	const fetchCursos = async () => {
		setLoading(true);
		setError(false);
		try {
		  const response = await api.get(/cursos/${currentPage}/3);
		  setCursos(response.data.cursos);
		} catch (error) {
		  console.error(error);
		  setError(true);
		} finally {
		  setLoading(false);
		}
	  };

	  useEffect(() => {
		if (user) {
		  fetchCursos();
		}
	  }, [user, currentPage]);

	return (
		<Box height={'150vh'} background="linear-gradient(to bottom, #000000, #401336)">
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
					{!loading && !error && Array.isArray(cursos) && (
						<>
						{cursos.map((curso) => (
							<CardCursoEdit curso={curso} key={curso.Id} />
						))}
						<Flex justifyContent={'center'} alignItems={'center'} mt={3}>
							<Button style={{background: '#B530F3', color: '#ffffff'}} onClick={prevPage} disabled={currentPage === 1}>
							Anterior
							</Button>
							<span style={{ color: '#FFFFFF', margin: '0 10px' }}>{currentPage}</span>
							<Button style={{background: '#B530F3', color: '#ffffff'}} onClick={nextPage} disabled={cursos.length < itemsPerPage}>
							Próxima
							</Button>
						</Flex>
						</>
					)}
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}
