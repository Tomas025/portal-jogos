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
			height={'90vh'}
			paddingY={'2%'}
			paddingInline={'8%'}
			backgroundColor={'#120E27'}
			gap={'10%'}
		>
			<Flex
				flexDir={'column'}
				border={'1px solid #B530F3'}
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
				<Text>Elliot Alderson</Text>
				<Text>@Hackerman</Text>
				<Text>Sobre</Text>
				<Text>
					I&apos;m Yuki. Full Stack Designer I enjoy creating
					user-centric, delightful and human experiences.
				</Text>

				<Flex>
					<FiYoutube />
					<FiInstagram />
					<FiGithub />
					<FiLinkedin />
					<FiTwitter />
				</Flex>
			</Flex>
			<Flex>
				<form>
					<FormControl>
						<FormLabel>Username</FormLabel>
						<Input type="text" />
					</FormControl>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input type="text" />
					</FormControl>
					<Flex>
						<FormControl>
							<FormLabel>YouTube</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel>Discord</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel>Linkedin</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel>Instagram</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel>Github</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl>
							<FormLabel>Twitter</FormLabel>
							<Input type="text" />
						</FormControl>
					</Flex>
					<FormControl>
						<FormLabel>Bio</FormLabel>
						<Textarea />
					</FormControl>
					<Button type="submit">Salvar</Button>
				</form>
			</Flex>
		</Flex>
	);
};
