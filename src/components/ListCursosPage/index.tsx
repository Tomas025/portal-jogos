'use client';
import { Dispatch, SetStateAction, useState } from 'react';

import { CardCursoEdit } from 'components/CardCursoEdit';
import { WithSubnavigation } from 'components/NavBar';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { api } from 'services/api';

import { Pagination } from './Pagination';
import { Curso } from './type';
type listCursosType = {
	cursos: Curso[];
	totalPages: number;
};

export default function ListCursosPage({
	currentPage,
	setCurrentPage
}: {
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
	const [totalPages, setTotalPages] = useState(0);
	// const [cursos, setCursos] = useState<Curso[]>([]);

	async function fetchCursos() {
		console.log('fetchCursos');
		const response = await api
			.get<listCursosType>(`/cursos/page/${currentPage}`)
			.then((response) => {
				setTotalPages(response.data.totalPages);
				return response.data.cursos;
			});

		return response;
	}

	const { data, isLoading, isError } = useQuery({
		queryKey: ['cursos', currentPage],
		queryFn: () => fetchCursos(),
		staleTime: 1000 * 60 * 5
	});

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
						{/* {loading && <p>Loading...</p>}
						{error && <p>Erro ao carregar os cursos</p>} */}
						{!isLoading && !isError ? (
							<>
								{data?.map((curso: Curso) => (
									<CardCursoEdit
										curso={curso}
										key={curso.Id}
									/>
								))}
								<Pagination
									numPages={totalPages}
									getCourses={setCurrentPage}
								/>
							</>
						) : isError ? (
							<p>Erro ao carregar os cursos</p>
						) : isLoading ? (
							<p>Loading...</p>
						) : null}
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}
