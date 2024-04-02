'use client';
import { useState, useEffect } from 'react';

import { CardCursoEdit } from 'components/CardCursoEdit';
import { WithSubnavigation } from 'components/NavBar';

import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { api } from 'services/api';

import { Curso } from './type';

export default function ListCursosPage() {
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(3);

	const nextPage = () => setCurrentPage(currentPage + 1);
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	const fetchCursos = async () => {
		setLoading(true);
		setError(false);
		try {
			const response = await api.get(`/cursos/page/${currentPage}`);
			setCursos(response.data.cursos);
		} catch (error) {
			console.error(error);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCursos();
	}, [currentPage]);

	return (
		<Box
			overflow="auto"
			bgGradient="linear(to-b, rgba(88,34,80,1) 0%, rgba(105,9,121,1) 23%, rgba(99,21,129,1) 51%, rgba(69,79,167,1) 100%, rgba(0,212,255,1) 100%)"
		>
			<WithSubnavigation />
			<Flex
				width={'100vw'}
				height={'100vh'}
				flexDirection={'column'}
				justifyContent={'start'}
				alignItems={'center'}
			>
				<Flex justifyContent={'left'} flexDir={'column'} gap={4}>
					<Heading
						borderBottom={'10px solid #B530F3'}
						fontSize={'7.0625rem'}
						color={'#FFFFFF'}
						width={'min-content'}
					>
						Explorar
					</Heading>
					<Box>
						{loading && <p>Loading...</p>}
						{error && <p>Erro ao carregar os cursos</p>}
						{!loading && !error && (
							<>
								{cursos.map((curso) => (
									<CardCursoEdit
										curso={curso}
										key={curso.Id}
									/>
								))}
								<Flex
									justifyContent={'center'}
									alignItems={'center'}
									mt={3}
								>
									<Button
										style={{
											background: '#B530F3',
											color: '#ffffff'
										}}
										onClick={prevPage}
										disabled={currentPage === 1}
									>
										Anterior
									</Button>
									<span
										style={{
											color: '#FFFFFF',
											margin: '0 10px'
										}}
									>
										{currentPage}
									</span>
									<Button
										style={{
											background: '#B530F3',
											color: '#ffffff'
										}}
										onClick={nextPage}
										disabled={cursos.length < itemsPerPage}
									>
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
