import { Flex, Heading, Text } from '@chakra-ui/react';

import { Card } from './Card';

const cardsProps = [
	{
		title: 'Realista',
		description:
			'Jogos que buscam representar o mundo real com o máximo de fidelidade possível.'
	},
	{
		title: 'Cartoonesco',
		description:
			'Jogos que apresentam personagens e cenários estilizados, com traços simples e cores vivas.'
	},
	{
		title: 'Horror',
		description: 'Jogos que buscam causar medo e suspense nos jogadores.'
	},
	{
		title: 'Comédia',
		description: 'Jogos que buscam divertir os jogadores com humor.'
	},
	{
		title: 'Drama',
		description:
			'Jogos que buscam contar histórias emocionantes e envolventes.'
	},
	{
		title: 'Luta',
		description:
			'Jogos que envolvem combates entre dois ou mais personagens.'
	}
];

export const StyleSection = () => {
	return (
		<Flex
			flexDir={'column'}
			width={'100%'}
			backgroundColor={'#411237'}
			paddingY={'2%'}
			paddingInline={'8%'}
			alignItems={'center'}
		>
			<Heading
				as={'b'}
				fontSize={'75px'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
				padding={'15px'}
			>
				Quais são os estilos?
			</Heading>
			<Text as={'b'} fontSize={'25px'} color={'white'}>
				Os jogos também podem ser divididos em diferentes estilos de
				design,
				<br /> que são definidos com base em sua estética, narrativa e
				jogabilidade.
				<br />
				Alguns dos estilos de design de jogos mais populares incluem:
			</Text>
			<Flex justify={'center'} align={'center'} gap={'5%'} marginY={'5%'}>
				{cardsProps.slice(0, 3).map((item, index) => (
					<Card
						key={index}
						title={item.title}
						description={item.description}
					/>
				))}
			</Flex>
			<Flex justify={'center'} align={'center'} gap={'5%'} marginY={'5%'}>
				{cardsProps.slice(3, 6).map((item, index) => (
					<Card
						key={index}
						title={item.title}
						description={item.description}
					/>
				))}
			</Flex>
		</Flex>
	);
};
