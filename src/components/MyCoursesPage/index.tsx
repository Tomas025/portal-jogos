'use client';
import { useEffect, useState } from 'react';

import { CardCursoEdit } from 'components/CardCursoEdit';
import { Curso } from 'components/ListCursosPage/type';
import { WithSubnavigation } from 'components/NavBar';
import { userProps } from 'components/ProfilePage/type';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';
import { api } from 'services/api';

export default function MyCoursesPage() {
	const { 'portal-jogos.token': token } = parseCookies();
	const [cursos, setCursos] = useState<Curso[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const [user] = useState<userProps | null>(jwtDecode(token) || null);

	useEffect(() => {
		if (user) {
			(async () => {
				try {
					const response = await api.get(`cursos/`);
					setCursos(response.data);
				} catch (error) {
					console.error(error);
					setError(true);
				} finally {
					setLoading(false);
				}
			})();
		}
	}, [user]);

	return (
		<Box backgroundImage={"url('/img/bgHeroSection.png')"}>
			<WithSubnavigation />
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
						<Box gap={40} height={'70vh'} overflowY={'scroll'}>
							{cursos.map((curso) => (
								<CardCursoEdit key={curso.Id} curso={curso} />
							))}
						</Box>
					)}
				</Flex>
			</Flex>
		</Box>
	);
}
