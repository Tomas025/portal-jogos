import CursosProgress from 'components/CursosProgress';
import XpProgress from 'components/XpProgress';

import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

export default function DashboardStudentPage() {
	return (
		<Box backgroundImage={"url('/img/bgHeroSection.png')"}>
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
