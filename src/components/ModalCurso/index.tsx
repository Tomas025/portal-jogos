import Image from 'next/image';
import Link from 'next/link';

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
	Text
} from '@chakra-ui/react';

export default function ModalCurso(curso: Curso) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				variant={'outline'}
				rounded={'0'}
				colorScheme="cyan"
				_hover={{ backgroundColor: '#00B5D833' }}
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
				size={{ base: 'xl', md: 'xl', lg: 'xl', xl: 'xxl' }}
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
						height={'640'}
						width={'960'}
					/>
					<ModalHeader>{curso.Titulo}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
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
						<Button
							variant={'outline'}
							rounded={'0'}
							colorScheme="pink"
							_hover={{
								backgroundColor: '#a35b9d',
								color: '#0e0b1c'
							}}
						>
							Inscrever-se
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
