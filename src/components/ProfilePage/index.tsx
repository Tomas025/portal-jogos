import Image from 'next/image';
import Link from 'next/link';
import {
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube
} from 'react-icons/fi';

import {
	Box,
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
			justifyContent={'center'}
			width={'100%'}
			height={'100vh'}
			paddingY={'2%'}
			paddingInline={'8%'}
			backgroundColor={'#120E27'}
			gap={'2vw'}
		>
			<Flex
				width={'20vw'}
				height={'58vh'}
				flexDir={'column'}
				border={'1px solid #B530F3'}
				alignItems={'center'}
				justifyContent={'space-between'}
				borderRadius={'8px'}
				padding={'2% 0'}
			>
				<Flex flexDir={'column'} alignItems={'center'} gap={'10'}>
					<Flex flexDir={'column'} alignItems={'center'}>
						<Flex
							rounded={'full'}
							overflow={'hidden'}
							backgroundColor={'#d3d3d3'}
							width={'160px'}
							height={'160px'}
						>
							<Image
								src={'/img/profile.jpeg'}
								width={'160'}
								height={'160'}
								alt={'Foto de perfil'}
							/>
						</Flex>
						<Box textAlign={'center'} marginTop={'10%'}>
							<Text
								as={'b'}
								color={'white'}
								fontSize={'1.875rem'}
							>
								Elliot Alderson
							</Text>
							<Text
								color={'gray'}
								fontSize={'1.25rem'}
								marginTop={'-2%'}
							>
								@Hackerman
							</Text>
						</Box>
					</Flex>
					<Box width={'60%'} textAlign={'center'}>
						<Text color={'white'} fontSize={'1.25rem'}>
							Sobre
						</Text>
						<Text color={'white'} fontSize={'.875rem'}>
							I&apos;m Yuki. Full Stack Designer I enjoy creating
							user-centric, delightful and human experiences.
						</Text>
					</Box>
				</Flex>
				<Flex
					width={'100%'}
					alignItems={'center'}
					justifyContent={'center'}
					gap={'20px'}
				>
					<Link href={'/'}>
						<FiYoutube fontSize={'1.5rem'} color={'red'} />
					</Link>
					<Link href={'/'}>
						<FiInstagram fontSize={'1.5rem'} color={'#D6349F'} />
					</Link>
					<Link href={'/'}>
						<FiGithub fontSize={'1.5rem'} color={'white'} />
					</Link>
					<Link href={'/'}>
						<FiLinkedin fontSize={'1.5rem'} color={'#0B65C3'} />
					</Link>
					<Link href={'/'}>
						<FiTwitter fontSize={'1.5rem'} color={'#1AA2F8'} />
					</Link>
				</Flex>
			</Flex>
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				width={'49vw'}
				height={'58vh'}
				border={'1px solid #B530F3'}
				borderRadius={'8px'}
				paddingInline={'3%'}
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
						<Input
							color={'white'}
							_focus={{ borderColor: '#F000AD' }}
							type="text"
							placeholder={'Digite sua Nametag'}
						/>
					</FormControl>
					<FormControl>
						<FormLabel color={'white'}>Name</FormLabel>
						<Input
							color={'white'}
							_focus={{ borderColor: '#F000AD' }}
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
								<Input
									color={'white'}
									_focus={{ borderColor: '#F000AD' }}
									type="text"
									placeholder={'Link do seu canal'}
								/>
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Discord</FormLabel>
								<Input
									color={'white'}
									_focus={{ borderColor: '#F000AD' }}
									type="text"
									placeholder={'Link do seu perfil Discord'}
								/>
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Linkedin</FormLabel>
								<Input
									color={'white'}
									_focus={{ borderColor: '#F000AD' }}
									type="text"
									placeholder={'Link do seu perfil Linkedin'}
								/>
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Instagram</FormLabel>
								<Input
									color={'white'}
									_focus={{ borderColor: '#F000AD' }}
									type="text"
									placeholder={'Link do seu perfil Instagram'}
								/>
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Github</FormLabel>
								<Input
									color={'white'}
									_focus={{ borderColor: '#F000AD' }}
									type="text"
									placeholder={'Link do seu perfil Github'}
								/>
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl>
								<FormLabel color={'white'}>Twitter</FormLabel>
								<Input
									color={'white'}
									_focus={{ borderColor: '#F000AD' }}
									type="text"
									placeholder={'Link do seu perfil Twitter'}
								/>
							</FormControl>
						</GridItem>
					</Grid>
					<FormControl>
						<FormLabel color={'white'}>Sobre</FormLabel>
						<Textarea
							color={'white'}
							_focus={{ borderColor: '#F000AD' }}
							resize={'none'}
							placeholder={'Digite um pequeno texto sobre você'}
						/>
					</FormControl>
					<Button
						as={'b'}
						width={'7vw'}
						height={'4.6vh'}
						fontSize={'1.25rem'}
						type="submit"
						colorScheme={'cyan'}
						variant={'outline'}
						alignSelf={'flex-start'}
						_hover={{ backgroundColor: '#00B5D833' }}
					>
						Salvar
					</Button>
				</form>
			</Flex>
		</Flex>
	);
};
