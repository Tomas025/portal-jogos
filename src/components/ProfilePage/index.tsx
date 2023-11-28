import Image from 'next/image';
import {
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube
} from 'react-icons/fi';

import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Text,
	Textarea
} from '@chakra-ui/react';

export const ProfilePage = () => {
	return (
		<Flex
			justifyContent={'space-around'}
			width={'100%'}
			height={'100vh'}
			paddingY={'2%'}
			paddingInline={'8%'}
			backgroundColor={'#120E27'}
			gap={'10%'}
		>
			<Flex
				flexDir={'column'}
				border={'1px solid #B530F3'}
				alignItems={'center'}
				justifyContent={'space-around'}
				borderRadius={'8px'}
			>
				<Flex
					rounded={'full'}
					overflow={'hidden'}
					backgroundColor={'#d3d3d3'}
					width={'300px'}
					height={'300px'}
				>
					<Image
						src={'/img/profile.png'}
						width={'300'}
						height={'300'}
						alt={'Foto de perfil'}
					/>
				</Flex>
				<Text as={'b'} color={'white'} fontSize={'1.875rem'}>
					Elliot Alderson
				</Text>
				<Text color={'gray'} fontSize={'1.25rem'}>
					@Hackerman
				</Text>
				<Text color={'white'} fontSize={'1.25rem'}>
					Sobre
				</Text>
				<Text color={'white'} fontSize={'.875rem'}>
					I&apos;m Yuki. Full Stack Designer I enjoy creating
					user-centric, delightful and human experiences.
				</Text>

				<Flex
					width={'100%'}
					alignItems={'center'}
					justifyContent={'center'}
					justifySelf={'flex-end'}
					gap={'20px'}
				>
					<FiYoutube fontSize={'1.5rem'} color={'red'} />
					<FiInstagram fontSize={'1.5rem'} color={'#D6349F'} />
					<FiGithub fontSize={'1.5rem'} color={'white'} />
					<FiLinkedin fontSize={'1.5rem'} color={'#0B65C3'} />
					<FiTwitter fontSize={'1.5rem'} color={'#1AA2F8'} />
				</Flex>
			</Flex>
			<Flex border={'1px solid #B530F3'} borderRadius={'8px'}>
				<form>
					<FormControl>
						<FormLabel color={'white'}>Username</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl>
						<FormLabel color={'white'}>Name</FormLabel>
						<Input type="text" />
					</FormControl>
					<Flex>
						<FormControl>
							<FormLabel color={'white'}>YouTube</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel color={'white'}>Discord</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel color={'white'}>Linkedin</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel color={'white'}>Instagram</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel color={'white'}>Github</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel color={'white'}>Twitter</FormLabel>
							<Input type="text" />
						</FormControl>
					</Flex>
					<FormControl>
						<FormLabel color={'white'}>Bio</FormLabel>
						<Textarea />
					</FormControl>
					<Button
						colorScheme={'cyan'}
						type="submit"
						variant={'outline'}
						_hover={{ backgroundColor: '#00B5D833' }}
					>
						Salvar
					</Button>
				</form>
			</Flex>
		</Flex>
	);
};
