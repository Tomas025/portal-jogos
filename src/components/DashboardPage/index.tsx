import { WithSubnavigation } from 'components/NavBar';

import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

import CursosProgress from './CursosProgress';
import XpProgress from './XpProgress';

export default function DashboardStudentPage() {
	return (
		<Box backgroundImage={"url('/img/bgHeroSection.png')"}>
			<WithSubnavigation />
			<Flex>
				<Grid
					templateRows="repeat(2, 2fr)"
					templateColumns="repeat(4, 1fr)"
					gap={8}
					width={'100%'}
					height={'100vh'}
					paddingX={'7.5rem'}
					paddingY={'7.5rem'}
				>
					<GridItem colSpan={1} bg="red"></GridItem>
					<GridItem>
						<XpProgress />
					</GridItem>
					<GridItem colSpan={2}>
						<CursosProgress />
					</GridItem>
					<GridItem colSpan={4} bg="brown"></GridItem>
				</Grid>
			</Flex>
		</Box>
	);
}
