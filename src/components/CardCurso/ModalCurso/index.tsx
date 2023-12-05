'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Curso } from 'components/ListCursosPage/type';
import { userProps } from 'components/ProfilePage/type';

import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Text,
	Flex,
	useToast
} from '@chakra-ui/react';
import { jwtDecode } from 'jwt-decode';
import { parseCookies } from 'nookies';
import { api } from 'services/api';

export default function ModalCurso(curso: Curso) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const Toast = useToast();
	const { 'portal-jogos.token': token } = parseCookies();

	const [user] = useState<userProps | null>(jwtDecode(token) || null);

	const subscribe = () => {
		api.post('/cursa', {
			idCurso: curso.Id,
			idPessoa: user?.result?.Id,
			concluido: false,
			dataInicio: new Date().toISOString(),
			dataFim: null
		})
			.then(() => {
				Toast({
					title: 'Inscrito com sucesso!',
					status: 'success',
					duration: 3000,
					isClosable: true,
					position: 'top'
				});
			})
			.catch((err) => {
				if (err.response.status === 409) {
					Toast({
						title: 'Você já está inscrito nesse curso!',
						description:
							'Vá para a aba "Meus Cursos" para acessá-lo',
						status: 'error',
						duration: 3000,
						isClosable: true,
						position: 'top'
					});
				} else {
					Toast({
						title: 'Erro ao se inscrever no curso!',
						description: 'Ocorreu um erro inesperado',
						status: 'error',
						duration: 3000,
						isClosable: true,
						position: 'top'
					});
				}
				console.error(err);
			});
	};

	return (
		<>
			<Button
				variant={'outline'}
				borderColor={'#00FFF0'}
				rounded={'5'}
				color={'#00FFF0'}
				_hover={{
					backgroundColor: '#00FFF0',
					color: '#0e0b1c'
				}}
				width={{ lg: '18.9375rem' }}
				height={{ lg: '6rem' }}
				fontSize={{ lg: '2.125rem' }}
				onClick={onOpen}
			>
				Saiba Mais
			</Button>
			<Modal
				isCentered
				onClose={onClose}
				isOpen={isOpen}
				motionPreset="slideInBottom"
				size={{ base: 'xl', md: 'xl', lg: 'xl', xl: '2xl' }}
				scrollBehavior={'inside'}
			>
				<ModalOverlay />
				<ModalContent
					height={{
						base: '100vh',
						md: 'auto',
						lg: '100vh',
						xl: '100vh'
					}}
					width={{ xl: '48.625rem' }}
					textColor={'#fff'}
					border={'none'}
					padding={'0'}
					bg={'#0E0B1D'}
				>
					<Image
						src={'/img/image-curso 1.png'}
						alt={''}
						height={'417'}
						width={'778'}
					/>
					<ModalHeader>{curso.Titulo}</ModalHeader>
					<ModalCloseButton />
					<ModalBody height={'591px'}>
						<Text
							textAlign={{
								base: 'start',
								md: 'start',
								lg: 'start',
								xl: 'start'
							}}
						>
							{curso.Descricao}
						</Text>
					</ModalBody>
					<ModalFooter justifyContent={'left'}>
						{1 < 0 && (
							<Button variant={'link'} colorScheme="white">
								<Link href={'Aqui vai o link do beneficio'}>
									Acessar
								</Link>
							</Button>
						)}
						<Flex flexDir={'column'} gap={4}>
							<Flex>
								<Text
									fontSize={'font-size: 1.25rem'}
									fontWeight={400}
								>
									Criador/XP/Insiginia:{' '}
								</Text>
								<Text color={'#F000AD'}>
									Dona Nise / 5000XP / 🎖
								</Text>
							</Flex>
							<Button
								variant={'outline'}
								borderColor={'#00FFF0'}
								rounded={'0'}
								color={'#00FFF0'}
								width={'9.75rem'}
								_hover={{
									backgroundColor: '#00FFF0',
									color: '#0e0b1c'
								}}
								flexGrow={0}
								flexShrink={0}
								onClick={subscribe}
							>
								Inscrever-se
							</Button>
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
