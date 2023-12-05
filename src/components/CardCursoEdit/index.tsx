import Link from 'next/link';

import { Curso } from 'components/ListCursosPage/type';

import { Card, CardBody, Text, Flex, Button } from '@chakra-ui/react';

import { ModalCursoEdit } from './ModalCursoEdit';

export default function CardCurso(curso: Curso) {
	return (
		<Card
			bg={'#120E27'}
			width={{ lg: '1591px' }}
			height={{ lg: '226px' }}
			rounded={'14px'}
			borderTop={'34px solid #2A2156'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<CardBody
				width={{ lg: '1591px' }}
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
						<Text
							color={'#F5F5F5'}
							fontFamily={'Arial'}
							fontSize={'30px'}
							fontWeight={'700'}
							lineHeight={'normal'}
						>
							{curso.Titulo}
						</Text>
						<Text color={'#F000AD'} fontWeight={'600'}>
							Top rating / 5000XP
						</Text>
					</Flex>
					<ModalCursoEdit {...curso} />
					<Button
						variant={'outline'}
						borderColor={'#00FFF0'}
						rounded={'0'}
						color={'#00FFF0'}
						_hover={{
							backgroundColor: '#00FFF0',
							color: '#0e0b1c'
						}}
					>
						<Link href={'/beneficios'}>Adicionar Conteúdo +</Link>
					</Button>
				</Flex>
			</CardBody>
		</Card>
	);
}
