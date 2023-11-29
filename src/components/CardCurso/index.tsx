import { Curso } from 'components/ListCursosPage/type';

import {
	Card,
	// CardHeader,
	CardBody,
	Text,
	Button,
	Flex
} from '@chakra-ui/react';

export default function CardCurso(curso: Curso) {
	return (
		<Card
			bg={'#120E27'}
			width={{ lg: '1591px' }}
			height={{ lg: '226px' }}
			rounded={'14px'}
			borderTop={'34px solid #2A2156'}
		>
			{/* <CardHeader>{curso.Titulo}</CardHeader> */}
			<CardBody>
				<Flex>
					<Text
						color={'#F5F5F5'}
						fontFamily={'Arial'}
						fontSize={'30px'}
						fontWeight={'700'}
						lineHeight={'normal'}
					>
						{curso.Titulo}
					</Text>
					<Button
						variant={'outline'}
						rounded={'0'}
						colorScheme="cyan"
						_hover={{ backgroundColor: '#00B5D833' }}
					>
						Saiba Mais
					</Button>
				</Flex>
			</CardBody>
		</Card>
	);
}
