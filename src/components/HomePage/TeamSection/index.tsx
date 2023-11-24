import { Flex, Heading } from '@chakra-ui/react';

export const TeamSection = () => {
	return (
		<Flex
			width={'100%'}
			minHeight={'100vh'}
			backgroundImage={"url('/img/bgTeamSection.png')"}
			backgroundRepeat={'no-repeat'}
			backgroundSize={'cover'}
			flexDir={'column'}
			paddingY={'2%'}
			paddingInline={'8%'}
		>
			<Heading
				as={'b'}
				fontSize={'90px'}
				color={'white'}
				textDecoration={'underline #C329FFCC'}
			>
				Equipe
			</Heading>
		</Flex>
	);
};
