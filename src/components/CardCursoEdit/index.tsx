import Link from 'next/link';

import { Curso } from 'components/ListCursosPage/type';

import { Card, CardBody, Text, Flex, Button } from '@chakra-ui/react';

import { ModalCursoEdit } from './ModalCursoEdit';

export function CardCursoEdit({ curso }: { curso: Curso }) {
	return (
		<Card
			bg={'#120E27'}
			width={{ lg: '80vw' }}
			height={{ lg: '35vh' }}
			rounded={'14px'}
			borderTop={'34px solid #2A2156'}
			justifyContent={'center'}
			alignItems={'center'}
			marginTop={'20px'}
		>
			<CardBody
				width={{ lg: '80vw' }}
				display={'flex'}
				justifyContent={'center'}
			>
				<Flex
					justifyContent={'space-between'}
					alignItems={'center'}
					// border={'1px dashed white'}
					width={{ lg: '90%' }}
				>
					<Flex flexDirection={'column'}>
						<Flex alignItems={'center'}>
							<Text
								color={'#F5F5F5'}
								fontFamily={'Arial'}
								fontSize={'30px'}
								fontWeight={'700'}
								lineHeight={'normal'}
								marginRight={'2vw'}
							>
								{curso?.Titulo}
							</Text>
							<ModalCursoEdit curso={curso} />
						</Flex>
						<Text color={'#F000AD'} fontWeight={'600'}>
							Top rating / 5000XP
						</Text>
					</Flex>
					<Button
						variant={'outline'}
						borderColor={'#00FFF0'}
						rounded={'5'}
						color={'#00FFF0'}
						_hover={{
							backgroundColor: '#00FFF0',
							color: '#0e0b1c'
						}}
						width={{ lg: '22vw' }}
						height={{ lg: '6rem' }}
						fontSize={{ lg: '1.5rem' }}
					>
						<Link href={'/beneficios'}>Adicionar Conteúdo +</Link>
					</Button>
				</Flex>
			</CardBody>
		</Card>
	);
}
