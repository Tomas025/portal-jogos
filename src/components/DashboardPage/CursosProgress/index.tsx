'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import {
	Flex,
	Card,
	CardBody,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
	Text,
	Heading
} from '@chakra-ui/react';
import { api } from 'services/api';

type Curso = {
	idCurso: number;
	idPessoa: number;
	AulasConcluidas: number;
	TotalAulas: number;
	TituloCurso: string;
};

export default function CursosProgress() {
	const [cursos, setCursos] = useState<Curso[]>([]);

	const fetchData = async () => {
		try {
			const response = await api.get('/cursos/progresso/pessoaId/3');
			setCursos(response.data);
			// console.log(response.data);
		} catch (error) {
			console.error(error);
			alert('Erro ao carregar cursos');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Flex justifyContent={'center'} alignItems={'center'}>
			<Card
				bg={'#120E27'}
				width={{ lg: 'auto' }}
				height={{ lg: '22rem' }}
				rounded={'14px'}
				borderTop={'34px solid #2A2156'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<CardBody
					width={{ lg: '52rem' }}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'flex-start'}
					flexDir={'column'}
				>
					<TableContainer
						width={'100%'}
						height={'31vh'}
						overflowY={'scroll'}
					>
						<Table color="#f5f5f5">
							<Thead>
								<Tr>
									<Th border="none">
										<Heading
											fontSize={'1.75rem'}
											color="#f5f5f5"
										>
											Cursos em andamento
										</Heading>
									</Th>
									<Th border="none">
										<Heading
											fontSize={'1.75rem'}
											textAlign={'center'}
											color="#f5f5f5"
										>
											AC/AT
										</Heading>
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								{cursos.map((curso) => (
									<Tr key={curso.idPessoa}>
										<Td
											border="none"
											_hover={{
												textDecoration: 'underline'
											}}
										>
											<Text
												fontSize={'1.25rem'}
												fontWeight={'100'}
											>
												<Link
													href={`/cursos/${curso.idCurso}`}
												>
													{curso.TituloCurso}
												</Link>
											</Text>
										</Td>
										<Td alignItems={'center'} border="none">
											<Text
												fontSize={'1.25rem'}
												fontWeight={'100'}
												textAlign={'center'}
											>
												{curso.AulasConcluidas}/
												{curso.TotalAulas}
											</Text>
										</Td>
									</Tr>
								))}
							</Tbody>
							<Tfoot>
								<Tr>
									<Th
										color="#f5f5f5"
										_hover={{
											textDecoration: 'underline'
										}}
									>
										<Link href="/listCursos">
											ver todos
										</Link>
									</Th>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
				</CardBody>
			</Card>
		</Flex>
	);
}
