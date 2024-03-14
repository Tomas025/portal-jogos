'use client';
import Link from 'next/link';

import { userProps } from 'components/ProfilePage/type';

import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Saiba Mais', href: '/informations' }
];

const navItemsUser = [
	{ label: 'Dashboard', href: '/dashboard' },
	{ label: 'Explorar', href: '/listCursos' },
	{ label: 'Meus Cursos', href: '/myCourses' },
	{ label: 'Perfil', href: '/profile' }
];

export const WithSubnavigation = () => {
	const myUser = Cookies.get('user');
	const user = () => {
		if (myUser) {
			return jwtDecode<userProps>(myUser!);
		} else {
			return null;
		}
	};

	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-between'}
			width={'100%'}
			color={'white'}
			padding={5}
		>
			<Flex justifySelf={'flex-start'} alignItems={'center'} gap={5}>
				<Text as={'b'} fontSize={'2xl'}>
					PDJ
				</Text>
				{myUser ? (
					<>
						{navItemsUser.map((navItem, index) => (
							<Link href={navItem.href} key={index}>
								{navItem.label}
							</Link>
						))}
					</>
				) : (
					<>
						{navItems.map((navItem, index) => (
							<Link href={navItem.href} key={index}>
								{navItem.label}
							</Link>
						))}
					</>
				)}
			</Flex>
			{myUser && (
				<Flex alignItems={'center'} gap={'5'}>
					<Box textAlign={'end'}>
						<Text as={'b'} fontSize={'xl'}>
							{user.result.Username}
						</Text>
						<Text color={'gray'}>{user.result.Nome}</Text>
					</Box>
					<Avatar
						size={'lg'}
						name={user.result.Nome}
						src={user.result.UrlAvatar}
					/>
				</Flex>
			)}
			{!myUser && (
				<Button
					variant={'outline'}
					borderColor={'#00FFF0'}
					rounded={'5'}
					color={'#00FFF0'}
					_hover={{
						backgroundColor: '#00FFF0',
						color: '#0e0b1c'
					}}
				>
					<Link href={'/login'}>Login</Link>
				</Button>
			)}
		</Flex>
	);
};
