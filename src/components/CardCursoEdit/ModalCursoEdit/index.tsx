'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiEdit3 } from 'react-icons/fi';

import { Curso } from 'components/ListCursosPage/type';

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
	useToast,
	Heading,
	FormControl,
	Input
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from 'services/api';
import * as yup from 'yup';

import { formCourseProps } from './type';

const courseSchema = yup.object().shape({
	title: yup.string().required('Campo obrigatório'),
	description: yup.string().required('Campo obrigatório')
});

export function ModalCursoEdit(curso: Curso) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [editTitle, setEditTitle] = useState(false);
	const [editDescription, setEditDescription] = useState(false);
	const Toast = useToast();

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(courseSchema),
		defaultValues: {
			title: curso.Titulo,
			description: curso.Descricao
		}
	});

	const submitForm: SubmitHandler<formCourseProps> = ({
		title,
		description
	}) => {
		api.patch(`/cursos/${curso.Id}`, {
			Titulo: title,
			Descricao: description
		})
			.then(() => {
				Toast({
					title: 'Curso atualizado com sucesso',
					status: 'success',
					duration: 3000,
					isClosable: true
				});
			})
			.catch(() => {
				Toast({
					title: 'Erro ao atualizar o curso',
					status: 'error',
					duration: 3000,
					isClosable: true
				});
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
				<FiEdit3 />
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
					<form onSubmit={handleSubmit(submitForm)}>
						<Image
							src={'/img/image-curso 1.png'}
							alt={''}
							height={'417'}
							width={'778'}
						/>
						<ModalHeader>
							<Flex>
								{editTitle == true ? (
									<FormControl>
										<Input
											color={'white'}
											_focus={{ borderColor: '#F000AD' }}
											type="text"
											placeholder={'Digite o novo titulo'}
											{...register('title')}
										/>
									</FormControl>
								) : (
									<Heading>{watch('title')}</Heading>
								)}
								{errors.title?.message ? (
									<Text as={'b'} color={'red'}>
										{errors.title.message}
									</Text>
								) : null}
								<FiEdit3 onClick={setEditTitle(!editTitle)} />
							</Flex>
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody height={'591px'}>
							<Flex>
								{editDescription == true ? (
									<FormControl>
										<Input
											color={'white'}
											_focus={{ borderColor: '#F000AD' }}
											type="text"
											placeholder={
												'Digite a nova descrição'
											}
											{...register('description')}
										/>
									</FormControl>
								) : (
									<Text
										textAlign={{
											base: 'start',
											md: 'start',
											lg: 'start',
											xl: 'start'
										}}
									>
										{watch('description')}
									</Text>
								)}
								{errors.description?.message ? (
									<Text as={'b'} color={'red'}>
										{errors.description.message}
									</Text>
								) : null}
								<FiEdit3
									onClick={setEditDescription(
										!editDescription
									)}
								/>
							</Flex>
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
									type="submit"
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
								>
									Salvar
								</Button>
							</Flex>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	);
}
