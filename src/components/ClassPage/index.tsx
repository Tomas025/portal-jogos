import { Box, Flex } from '@chakra-ui/react';

import CardModule from './CardModule';

export default function ClassPage() {
	return (
		<Box
			// backgroundImage={"url('/img/bgHeroSection.png')"}
			width={'100%'}
			height={'100vh'}
		>
			<Flex
				width={'100vw'}
				height={'100vh'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<CardModule />
			</Flex>
		</Box>
	);
}
