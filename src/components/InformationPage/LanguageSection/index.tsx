import { Flex, Heading, Text } from '@chakra-ui/react';

import { Card } from './Card';

const cardsProps = [
	{
		title: 'C++',
		description:
			'Linguagem de programação robusta e eficiente, que é amplamente utilizada em jogos de alto desempenho.'
	},
	{
		title: 'C#',
		description:
			'Linguagem de programação moderna e versátil, que é popular para jogos de console e PC.'
	},
	{
		title: 'Java',
		description:
			'Linguagem de programação multiplataforma, que é popular para jogos móveis e web.'
	},
	{
		title: 'Python',
		description:
			'Linguagem de alto nível, que é fácil de aprender e usar, e que tem sido usada para criar jogos simples e complexos.'
	}
];

export const LanguageSection = () => {
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
				fontSize={'71px'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
				padding={'15px'}
			>
				Quais linguagens são mais utilizadas?
			</Heading>
			<Text as={'b'} fontSize={'25px'} color={'white'}>
				As linguagens mais usadas para a criação de jogos são:
			</Text>
			<Flex justify={'center'} align={'center'} gap={'5%'} marginY={'3%'}>
				{cardsProps.slice(0, 2).map((item, index) => (
					<Card
						key={index}
						title={item.title}
						description={item.description}
						icon={''}
					/>
				))}
			</Flex>
			<Flex justify={'center'} align={'center'} gap={'5%'} marginY={'3%'}>
				{cardsProps.slice(2, 4).map((item, index) => (
					<Card
						key={index}
						title={item.title}
						description={item.description}
						icon={''}
					/>
				))}
			</Flex>
		</Flex>
	);
};
