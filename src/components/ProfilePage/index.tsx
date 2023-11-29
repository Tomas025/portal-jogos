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
	Grid,
	GridItem,
	Input,
	Text,
	Textarea
} from '@chakra-ui/react';

export const ProfilePage = () => {
	return (
		<Flex
			justifyContent={'space-evenly'}
			width={'100%'}
			height={'100vh'}
			paddingY={'2%'}
			paddingInline={'8%'}
			backgroundColor={'#120E27'}
			gap={'10%'}
		>
			<Flex
				width={'20vw'}
				height={'58vh'}
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
			<Flex
				alignItems={'flex-start'}
				justifyContent={'center'}
				width={'49vw'}
				height={'58vh'}
				border={'1px solid #B530F3'}
				borderRadius={'8px'}
				padding={'4% 3% 4% 3%'}
			>
				<form
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						gap: '2vh'
					}}
				>
					<FormControl>
						<FormLabel color={'white'}>Nametag</FormLabel>
						<Input type="text" placeholder={'Digite sua Nametag'} />
					</FormControl>
					<FormControl>
						<FormLabel color={'white'}>Name</FormLabel>
						<Input
							type="text"
							placeholder={'Digite seu nome de usuário'}
						/>
					</FormControl>
					<Grid
						templateColumns={'repeat(3, 1fr)'}
						templateRows={'repeat(2, 1fr)'}
						gap={'2%'}
					>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>YouTube</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Discord</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Linkedin</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Instagram</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Github</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Twitter</FormLabel>
								<Input type="text" />
							</FormControl>
						</GridItem>
					</Grid>
					<FormControl>
						<FormLabel color={'white'}>Sobre</FormLabel>
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
