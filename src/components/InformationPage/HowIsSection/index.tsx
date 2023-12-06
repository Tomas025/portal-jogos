import { Flex, Heading, Text } from '@chakra-ui/react';

import { Card } from './Card';

const cardsProps = [
	{
		icon: 'book',
		title: 'Planejamento',
		description:
			'Definir os objetivos do jogo, o público-alvo, o gênero e o estilo de jogo, além de recursos necessários, como equipe, orçamento e cronograma.'
	},
	{
		icon: 'pen',
		title: 'Design',
		description:
			'Definir os elementos do jogo, incluindo história, personagens, cenários, jogabilidade e interface do usuário.'
	},
	{
		icon: 'airplay',
		title: 'Codificação',
		description:
			'Implementar os elementos do jogo definidos na etapa de design.'
	}
];

export const HowIsSection = () => {
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
				Como um jogo é criado?
			</Heading>
			<Text as={'b'} fontSize={'25px'} color={'white'}>
				Aqui você aprenderá sobre jogos e seus processos de
				desenvolvimento:
			</Text>
			<Flex justify={'center'} align={'center'} gap={'5%'} marginY={'5%'}>
				{cardsProps.map((item, index) => (
					<Card
						key={index}
						icon={item.icon}
						title={item.title}
						description={item.description}
					/>
				))}
			</Flex>
		</Flex>
	);
};
