'use client';
// import Image from 'next/image';
import Link from 'next/link';
// import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube
} from 'react-icons/fi';

import { WithSubnavigation } from 'components/NavBar';

import {
	Avatar,
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Input,
	Text,
	Textarea,
	useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { api } from 'services/api';
import * as yup from 'yup';

import { ProfileFormProps, userProps } from './type';

const ProfileFormSchema = yup.object().shape({
	tagName: yup.string().required('TagName obrigatório'),
	userName: yup.string().required('Nome de usuário obrigatório'),
	youtube: yup.string().url('Link inválido'),
	discord: yup.string().url('Link inválido'),
	linkedin: yup.string().url('Link inválido'),
	instagram: yup.string().url('Link inválido'),
	github: yup.string().url('Link inválido'),
	twitter: yup.string().url('Link inválido'),
	about: yup.string().required('Sobre obrigatório')
});

export const ProfilePage = () => {
	const myUser = Cookies.get('user');
	const [user] = useState<userProps | null>(jwtDecode(myUser!) || null);
	const toast = useToast();

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(ProfileFormSchema),
		defaultValues: {
			userName: user?.result?.Nome,
			tagName: user?.result?.Username,
			youtube: user?.result?.YouTube || '',
			discord: user?.result?.Discord || '',
			linkedin: user?.result?.Linkedin || '',
			instagram: user?.result?.Instagram || '',
			github: user?.result?.Github || '',
			twitter: user?.result?.Twitter || '',
			about: user?.result?.Sobre
		}
	});

	const submitForm: SubmitHandler<ProfileFormProps> = ({
		userName,
		tagName,
		youtube,
		discord,
		linkedin,
		instagram,
		github,
		twitter,
		about
	}) => {
		api.patch(`/pessoas/${user?.result?.Id}`, {
			Nome: userName,
			Username: tagName,
			YouTube: youtube,
			Discord: discord,
			Linkedin: linkedin,
			Instagram: instagram,
			Github: github,
			Twitter: twitter,
			Sobre: about
		})
			.then(() => {
				toast({
					title: 'Perfil atualizado com sucesso',
					status: 'success',
					position: 'top',
					duration: 3000,
					isClosable: true
				});
			})
			.catch(() => {
				toast({
					title: 'Erro ao atualizar perfil',
					status: 'error',
					position: 'top',
					duration: 3000,
					isClosable: true
				});
			});
	};

	return (
		<Box backgroundColor={'#120E27'}>
			<WithSubnavigation />
			<Flex
				justifyContent={'center'}
				width={'100%'}
				height={'100vh'}
				paddingY={'2%'}
				paddingInline={'8%'}
				gap={'2vw'}
			>
				<Flex
					width={'20vw'}
					height={'70vh'}
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
								width={'160px'}
								height={'160px'}
							>
								<Avatar
									name={watch('userName')}
									// fontSize={'2rem'}
									size={'2xl'}
									backgroundColor={'#9E2600'}
									width={'160px'}
									height={'160px'}
								/>
							</Flex>
							<Box textAlign={'center'} marginTop={'10%'}>
								<Text
									as={'b'}
									color={'white'}
									fontSize={'1.875rem'}
								>
									{watch('userName')}
								</Text>
								<Text
									color={'gray'}
									fontSize={'1.25rem'}
									marginTop={'-2%'}
								>
									@{watch('tagName')}
								</Text>
							</Box>
						</Flex>
						<Box width={'60%'} textAlign={'center'}>
							<Text color={'white'} fontSize={'1.25rem'}>
								Sobre
							</Text>
							<Text color={'white'} fontSize={'.875rem'}>
								{watch('about')}
							</Text>
						</Box>
					</Flex>
					<Flex
						width={'100%'}
						alignItems={'center'}
						justifyContent={'center'}
						gap={'20px'}
					>
						<Link
							target="_blank"
							href={watch('youtube') as unknown as URL}
						>
							<FiYoutube fontSize={'1.5rem'} color={'red'} />
						</Link>
						<Link
							target="_blank"
							href={watch('instagram') as unknown as URL}
						>
							<FiInstagram
								fontSize={'1.5rem'}
								color={'#D6349F'}
							/>
						</Link>
						<Link
							target="_blank"
							href={watch('github') as unknown as URL}
						>
							<FiGithub fontSize={'1.5rem'} color={'white'} />
						</Link>
						<Link
							target="_blank"
							href={watch('linkedin') as unknown as URL}
						>
							<FiLinkedin fontSize={'1.5rem'} color={'#0B65C3'} />
						</Link>
						<Link
							target="_blank"
							href={watch('twitter') as unknown as URL}
						>
							<FiTwitter fontSize={'1.5rem'} color={'#1AA2F8'} />
						</Link>
					</Flex>
				</Flex>
				<Flex
					alignItems={'center'}
					justifyContent={'center'}
					width={'49vw'}
					height={'70vh'}
					border={'1px solid #B530F3'}
					borderRadius={'8px'}
					paddingInline={'3%'}
				>
					<form
						onSubmit={handleSubmit(submitForm)}
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
								{...register('tagName')}
							/>
							{errors.tagName?.message ? (
								<Text as={'b'} color={'red'}>
									{errors.tagName.message}
								</Text>
							) : null}
						</FormControl>
						<FormControl>
							<FormLabel color={'white'}>Name</FormLabel>
							<Input
								color={'white'}
								_focus={{ borderColor: '#F000AD' }}
								type="text"
								placeholder={'Digite seu nome de usuário'}
								{...register('userName')}
							/>
							{errors.userName?.message ? (
								<Text as={'b'} color={'red'}>
									{errors.userName.message}
								</Text>
							) : null}
						</FormControl>
						<Grid
							templateColumns={'repeat(3, 1fr)'}
							templateRows={'repeat(2, 1fr)'}
							gap={'2%'}
						>
							<GridItem>
								<FormControl>
									<FormLabel color={'white'}>
										YouTube
									</FormLabel>
									<Input
										color={'white'}
										_focus={{ borderColor: '#F000AD' }}
										type="text"
										placeholder={'Link do seu canal'}
										{...register('youtube')}
									/>
									{errors.youtube?.message ? (
										<Text as={'b'} color={'red'}>
											{errors.youtube.message}
										</Text>
									) : null}
								</FormControl>
							</GridItem>
							<GridItem>
								<FormControl>
									<FormLabel color={'white'}>
										Discord
									</FormLabel>
									<Input
										color={'white'}
										_focus={{ borderColor: '#F000AD' }}
										type="text"
										placeholder={
											'Link do seu perfil Discord'
										}
										{...register('discord')}
									/>
									{errors.discord?.message ? (
										<Text as={'b'} color={'red'}>
											{errors.discord.message}
										</Text>
									) : null}
								</FormControl>
							</GridItem>
							<GridItem>
								<FormControl>
									<FormLabel color={'white'}>
										Linkedin
									</FormLabel>
									<Input
										color={'white'}
										_focus={{ borderColor: '#F000AD' }}
										type="text"
										placeholder={
											'Link do seu perfil Linkedin'
										}
										{...register('linkedin')}
									/>
									{errors.linkedin?.message ? (
										<Text as={'b'} color={'red'}>
											{errors.linkedin.message}
										</Text>
									) : null}
								</FormControl>
							</GridItem>
							<GridItem>
								<FormControl>
									<FormLabel color={'white'}>
										Instagram
									</FormLabel>
									<Input
										color={'white'}
										_focus={{ borderColor: '#F000AD' }}
										type="text"
										placeholder={
											'Link do seu perfil Instagram'
										}
										{...register('instagram')}
									/>
									{errors.instagram?.message ? (
										<Text as={'b'} color={'red'}>
											{errors.instagram.message}
										</Text>
									) : null}
								</FormControl>
							</GridItem>
							<GridItem>
								<FormControl>
									<FormLabel color={'white'}>
										Github
									</FormLabel>
									<Input
										color={'white'}
										_focus={{ borderColor: '#F000AD' }}
										type="text"
										placeholder={
											'Link do seu perfil Github'
										}
										{...register('github')}
									/>
									{errors.github?.message ? (
										<Text as={'b'} color={'red'}>
											{errors.github.message}
										</Text>
									) : null}
								</FormControl>
							</GridItem>
							<GridItem>
								<FormControl>
									<FormLabel color={'white'}>
										Twitter
									</FormLabel>
									<Input
										color={'white'}
										_focus={{ borderColor: '#F000AD' }}
										type="text"
										placeholder={
											'Link do seu perfil Twitter'
										}
										{...register('twitter')}
									/>
									{errors.twitter?.message ? (
										<Text as={'b'} color={'red'}>
											{errors.twitter.message}
										</Text>
									) : null}
								</FormControl>
							</GridItem>
						</Grid>
						<FormControl>
							<FormLabel color={'white'}>Sobre</FormLabel>
							<Textarea
								color={'white'}
								_focus={{ borderColor: '#F000AD' }}
								resize={'none'}
								placeholder={
									'Digite um pequeno texto sobre você'
								}
								{...register('about')}
							/>
							{errors.about?.message ? (
								<Text as={'b'} color={'red'}>
									{errors.about.message}
								</Text>
							) : null}
						</FormControl>
						<Button
							type={'submit'}
							fontWeight={'bold'}
							width={'7vw'}
							height={'4.6vh'}
							fontSize={'1.25rem'}
							variant={'outline'}
							borderColor={'#00FFF0'}
							color={'#00FFF0'}
							alignSelf={'flex-start'}
							_hover={{
								backgroundColor: '#00FFF0',
								color: '#0e0b1c'
							}}
						>
							Salvar
						</Button>
					</form>
				</Flex>
			</Flex>
		</Box>
	);
};
