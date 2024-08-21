'use client';
import { useState, useEffect } from 'react';

import { userProps } from 'components/ProfilePage/type';

import {
	Card,
	CardBody,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Text
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface xpProps {
	xp: number;
}

export default function XpProgress(props: xpProps) {
	const myUser = Cookies.get('user');
	const [user] = useState<userProps | null>(jwtDecode(myUser!) || null);
	const [XP, setXP] = useState(0);
	useEffect(() => {
		setXP(user?.result?.XP || 0);
	}, [user?.result?.XP]);

	console.log(user?.result?.XP);

	return (
		<Flex justifyContent={'center'} alignItems={'center'}>
			<Card
				bg={'#120E27'}
				width={{ lg: '22rem' }}
				height={{ lg: '22rem' }}
				rounded={'14px'}
				borderTop={'34px solid #2A2156'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<CardBody
					width={{ lg: '1591px' }}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					flexDir={'column'}
				>
					<CircularProgress size={52} value={XP / 10} color="#B530F3">
						<CircularProgressLabel
							fontSize={'2rem'}
							color={'#FFFFFF'}
						>
							{XP}/1000
						</CircularProgressLabel>
					</CircularProgress>
					<Text
						color={'#F5F5F5'}
						fontWeight={'700'}
						fontSize={'2.375rem'}
					>
						XP
					</Text>
				</CardBody>
			</Card>
		</Flex>
	);
}
