import { WithSubnavigation } from 'components/NavBar';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const WhatIsSection = () => {
	return (
		<Box
			width={'100%'}
			height={'100vh'}
			backgroundImage={"url('/img/bgHeroSection.png')"}
			backgroundRepeat={'no-repeat'}
			backgroundSize={'cover'}
			alignItems={'center'}
			//backgroundColor={'#4B1A41'}
		>
			<WithSubnavigation />
			<Flex
				width={'100%'}
				minHeight={'80vh'}
				paddingInline={'8%'}
				flexDir={'column'}
				justifyContent={'space-evenly'}
				alignItems={'center'}
				paddingX={'20%'}
			>
				<Heading
					as={'b'}
					fontSize={'75px'}
					color={'white'}
					textDecoration={'underline #C329FFCC'}
				>
					O que é um jogo?
				</Heading>

				<Text as={'b'} fontSize={'25px'} color={'white'}>
					Um jogo é uma atividade ou processo que envolve uma série de
					regras ou restrições, que visa proporcionar diversão,
					entretenimento ou desafio.
					<br />
					<br />
					Um jogo digital é um jogo que usa a tecnologia de computador
					para ser jogado. Ele pode ser jogado em computadores
					pessoais (PCs), consoles, dispositivos móveis ou até mesmo
					em máquinas de arcade.
				</Text>
			</Flex>
		</Box>
	);
};
