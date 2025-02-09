import { FiAirplay, FiBook, FiPenTool } from 'react-icons/fi';

import { Flex, Text } from '@chakra-ui/react';

import { CardProps } from './type';

export const Card = ({ icon, title, description }: CardProps) => {
	return (
		<Flex
			flexDir={'column'}
			textAlign={'center'}
			alignItems={'center'}
			justifyContent={'flex-start'}
			backgroundImage={
				'linear-gradient(180deg, #ffffff26 29.08%, #a4329c26 97.41%);'
			}
			width={'25%'}
			height={'60vh'}
			paddingInline={'1.5%'}
			paddingY={'4%'}
			gap={'5%'}
			dropShadow={'4px 4px 4px 0px #00000040'}
			borderRadius={'10px'}
		>
			{icon == 'book' ? (
				<FiBook color={'white'} fontSize={'4.4rem'} />
			) : icon == 'pen' ? (
				<FiPenTool color={'white'} fontSize={'4.4rem'} />
			) : icon == 'airplay' ? (
				<FiAirplay color={'white'} fontSize={'4.4rem'} />
			) : null}
			<Text as={'b'} fontSize={'2rem'} color={'#C98DF9'}>
				{title}
			</Text>
			<Text fontSize={'1.2rem'} color={'white'} lineHeight={'40px'}>
				{description}
			</Text>
		</Flex>
	);
};
