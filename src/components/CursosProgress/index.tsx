import { Flex, Card, CardBody, Heading } from '@chakra-ui/react';

export default function CursosProgress() {
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
					alignItems={'center'}
					flexDir={'column'}
				>
					<Heading>Cursos em andamento</Heading>
				</CardBody>
			</Card>
		</Flex>
	);
}
