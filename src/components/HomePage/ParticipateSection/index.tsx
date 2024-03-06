import Link from 'next/link';

import { Button, Heading, Flex, Text } from '@chakra-ui/react';

export const ParticipateSection = () => {
	return (
		<Flex
			flexDir={'column'}
			justifyContent={'space-around'}
			width={'100%'}
			height={'90vh'}
			backgroundColor={'#120E27'}
			paddingY={'2%'}
			paddingInline={'8%'}
		>
			<Heading
				as={'b'}
				fontSize={'3.5rem'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
			>
				Participe
			</Heading>
			<Text
				as={'b'}
				fontSize={'3.5rem'}
				color={'white'}
				alignSelf={'center'}
				width={'75%'}
				textAlign={'center'}
			>
				Deseja se tornar um sensei? Aperte no botão abaixo e nos envie
				seu curso!
			</Text>
			<Button
				width={'30%'}
				height={'8vh'}
				rounded={'full'}
				alignSelf={'center'}
				fontSize={'2rem'}
				fontWeight={'bold'}
				colorScheme={'purple'}
			>
				<Link href="/login">Colabore</Link>
			</Button>
		</Flex>
	);
};
