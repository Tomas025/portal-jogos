import { Curso } from 'components/ListCursosPage/type';

import { Card, CardBody, Text, Flex } from '@chakra-ui/react';

import ModalCurso from './ModalCurso';

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
			marginTop={'20px'}
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
					<ModalCurso {...curso} />
				</Flex>
			</CardBody>
		</Card>
	);
}
