import { WithSubnavigation } from 'components/NavBar';

import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

import CursosProgress from './CursosProgress';
import XpProgress from './XpProgress';
import LastAchievement from './LastAchievement';
import ProgressBar from './ProgressBar';
import { userProps } from 'components/ProfilePage/type';
import { parseCookies } from 'nookies';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function DashboardStudentPage() {
	const { 'portal-jogos.token': token } = parseCookies();

	const [user] = useState<userProps | null>(jwtDecode(token) || null);
	const [XP, setXP] = useState<number>(0);
	useEffect(() => {
		setXP(user?.result?.XP || 0);
	}, [user?.result?.XP]);

	return (
		<Box background={"linear-gradient(to bottom, #000000, #401336)"}>
			<WithSubnavigation />
			<Flex>
				<Grid
					templateRows="repeat(2, 2fr)"
					templateColumns="repeat(4, 1fr)"
					gap={4}
					width={'100%'}
					height={'100%'}
					paddingX={'8.5%'}
					paddingY={'1rem'}
				>
					<GridItem colSpan={1}>
						<LastAchievement />
					</GridItem>
					<GridItem>
						<XpProgress xp={Number(XP)} />
					</GridItem>
					<GridItem colSpan={2}>
						<CursosProgress />
					</GridItem>
					<GridItem colSpan={4}>
						<ProgressBar xp={Number(XP)} />
					</GridItem>
				</Grid>
			</Flex>
		</Box>
	);
}
