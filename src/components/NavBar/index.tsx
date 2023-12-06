'use client';
import Link from 'next/link';

import { Button, Flex, Text } from '@chakra-ui/react';
import { parseCookies } from 'nookies';

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
	const { 'portal-jogos.token': token } = parseCookies();

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
				{token ? (
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
			{!token && (
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
