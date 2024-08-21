import Link from 'next/link';

import { Button, Flex, Heading, Text } from '@chakra-ui/react';

import { Card } from './Card';

const cardsProps = [
	{
		icon: 'book',
		title: 'Planejamento',
		description:
			'Os primeiros passos da concepção do jogo. Você aprenderá sobre gênero, estilo, roteiro e etc.'
	},
	{
		icon: 'pen',
		title: 'Design',
		description:
			'Tudo sobre o design, seja de mundo, personagens, objetos ou qualquer outra coisa.'
	},
	{
		icon: 'airplay',
		title: 'Codificação',
		description:
			'Colocar o jogo no mundo, você aprenderá sobre diversas ferramentas e linguagens de forma prática.'
	}
];

export const AboutSection = () => {
	return (
		<Flex
			flexDir={'column'}
			width={'100%'}
			background={'linear-gradient(#401336 0%, #38102f 100%)'}
			paddingY={'2%'}
			paddingInline={'8%'}
		>
			<Heading
				as={'b'}
				fontSize={'3.5rem'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
			>
				Sobre
			</Heading>
			<Text as={'b'} fontSize={'2rem'} color={'white'}>
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
			<Button
				width={'20%'}
				height={'7vh'}
				rounded={'full'}
				alignSelf={'center'}
				fontSize={'1.5rem'}
				fontWeight={'bold'}
				colorScheme={'purple'}
			>
				<Link href={'/informations'}>Saiba Mais</Link>
			</Button>
		</Flex>
	);
};
