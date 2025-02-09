import Link from 'next/link';

import { WithSubnavigation } from 'components/NavBar';

import { Flex, Box, Text, Button } from '@chakra-ui/react';

import styles from './styles.module.scss';

export const HeroSection = () => {
	return (
		<Box
			width={'100%'}
			background={'linear-gradient(to bottom, #000000, #401336)'}
		>
			<WithSubnavigation />
			<Flex
				width={'100%'}
				minHeight={'100vh'}
				paddingInline={'8%'}
				flexDir={'column'}
				justifyContent={'space-evenly'}
			>
				<Text as={'b'} color={'white'} fontSize={'4rem'} width={'50%'}>
					Desenvolva <span className={styles.fontColor}>jogos</span>{' '}
					incríveis e traga suas{' '}
					<span className={styles.fontColor}>ideias</span> à vida!
				</Text>
				<Button
					rounded={'full'}
					width={'20%'}
					height={'8vh'}
					alignSelf={'center'}
					fontSize={'1.5rem'}
					fontWeight={'bold'}
					colorScheme={'purple'}
				>
					<Link href="/login">Entre Agora</Link>
				</Button>
			</Flex>
		</Box>
	);
};
