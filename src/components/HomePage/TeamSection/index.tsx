import Image from 'next/image';

import { Flex, Heading, Text } from '@chakra-ui/react';

const peopleCardsProps = [
	{
		photo: '/img/bgHeroSection.png',
		name: 'Sionise',
		office: 'Idealizadora'
	},
	{
		photo: '/img/bgHeroSection.png',
		name: 'Mirosmar',
		office: 'Desenvolvedor'
	},
	{
		photo: '/img/bgHeroSection.png',
		name: 'José Neto',
		office: 'Desenvolvedor'
	},
	{
		photo: '/img/bgHeroSection.png',
		name: 'Marcelo',
		office: 'Desenvolvedor'
	},
	{
		photo: '/img/bgHeroSection.png',
		name: 'Tomas',
		office: 'Desenvolvedor'
	}
];

export const TeamSection = () => {
	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-evenly'}
			width={'100%'}
			minHeight={'100vh'}
			backgroundImage={"url('/img/bgTeamSection.png')"}
			backgroundRepeat={'no-repeat'}
			backgroundSize={'cover'}
			flexDir={'column'}
			paddingBottom={'10%'}
			paddingInline={'8%'}
		>
			<Heading
				as={'b'}
				fontSize={'3.5rem'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
				alignSelf={'flex-start'}
			>
				Equipe
			</Heading>
			<Flex
				width={'100%'}
				align={'center'}
				justify={'space-between'}
				// marginY={'5%'}
			>
				{peopleCardsProps.map((item, index) => (
					<Flex
						key={index}
						flexDir={'column'}
						align={'center'}
						justify={'center'}
						// gap={'5%'}
						// marginY={'5%'}
					>
						<Flex
							rounded={'full'}
							overflow={'hidden'}
							backgroundColor={'#d3d3d3'}
							width={'200px'}
							height={'200px'}
						>
							<Image
								src={item.photo}
								width={'200'}
								height={'200'}
								alt={item.name}
							/>
						</Flex>
						<Text as={'b'} fontSize={'2rem'} color={'white'}>
							{item.name}
						</Text>
						<Text as={'b'} fontSize={'2rem'} color={'white'}>
							{item.office}
						</Text>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
};
