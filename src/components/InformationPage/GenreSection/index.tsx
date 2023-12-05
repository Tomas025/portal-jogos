import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Card } from "./Card";
import styles from './styles.module.scss';

const cardsProps = [
	{
		title: 'Ação',
		description:
			' Jogos que envolvem desafios físicos e mentais, como reflexos, coordenação motora e raciocínio.'
	},
	{
		title: 'Aventura',
		description:
            'Jogos que envolvem exploração, resolução de quebra-cabeças e narrativa.'
	},
	{
		title: 'RPG',
		description:
            'Jogos que envolvem a criação e desenvolvimento de personagens, bem como a exploração de um mundo virtual.'
	},
    {
		title: 'Esportes',
		description:
            'Jogos que simulam esportes reais ou fictícios.'
	},
	{
		title: 'Estratégia',
		description:
            'Jogos que envolvem planejamento e tomada de decisões para vencer um oponente.'
	},
	{
		title: 'Simulação',
		description:
			'Jogos que simulam situações reais ou fictícias.'
	}
];

export const GenreSection = () => {
    return (
        <Flex
            flexDir={'column'}
            width={'100%'}
            backgroundColor={'#411237'}
            paddingY={'2%'}
            paddingInline={'8%'}
            alignItems={'center'}>
            <Heading
                as={'b'}
                fontSize={'75px'}
                color={'white'}
                textDecoration={'underline #C329FFCC'}
                padding={'15px'}>
                Quais são os gêneros?
            </Heading>
            <Text
                as={'b'}
                fontSize={'25px'}
                color={'white'}>
                Os jogos podem ser divididos em diferentes gêneros, que são <br /> definidos com base em seus objetivos, elementos e estilo de jogo. <br />Alguns dos gêneros mais populares de jogos digitais incluem:
            </Text>
            <Flex justify={'center'} align={'center'} gap={'5%'} marginY={'5%'}>
				{cardsProps.slice(0,3).map((item, index) => (
					<Card
						key={index}
						title={item.title}
						description={item.description}
					/>
				))}
			</Flex>
            <Flex justify={'center'} align={'center'} gap={'5%'} marginY={'5%'}>
				{cardsProps.slice(3,6).map((item, index) => (
					<Card
						key={index}
						title={item.title}
						description={item.description}
					/>
				))}
			</Flex>
        </Flex>
    );
}