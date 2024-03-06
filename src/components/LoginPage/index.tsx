'use client';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
	Link,
	useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import { api } from 'services/api';
import * as yup from 'yup';

import { LoginFormProps } from './type';

const LoginFormSchema = yup.object().shape({
	Email: yup.string().required('Email obrigatório').email('Email inválido'),
	Senha: yup.string().required('Senha obrigatória')
});

export const LoginPage = () => {
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const { push } = useRouter();

	function redirect() {
		push('/dashboard');
	}

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginFormProps>({ resolver: yupResolver(LoginFormSchema) });

	const submitForm: SubmitHandler<LoginFormProps> = ({ Email, Senha }) => {
		setIsLoading(true);
		api.post('/auth/login', {
			Email: Email,
			Senha: Senha
		})
			.then((response) => {
				Cookies.set('user', response.data.access_token, { expires: 1 });
				toast({
					title: 'Login realizado com sucesso',
					description:
						'Você será redirecionado para a página de perfil',
					status: 'success',
					position: 'top',
					duration: 5000,
					isClosable: true
				});
				// setTimeout(redirect, 1000);
				redirect();
			})
			.catch((error) => {
				console.log(error);
				if (error.response.data.statusCode != 401) {
					toast({
						title: 'Erro ao realizar login',
						description: 'Ocorreu algum erro ao realizar login',
						status: 'error',
						position: 'top',
						duration: 5000,
						isClosable: true
					});
				} else {
					toast({
						title: 'Erro ao realizar login',
						description: error.response.data.message,
						status: 'error',
						position: 'top',
						duration: 5000,
						isClosable: true
					});
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// para destruir o cookie:
	// destroyCookie(undefined, 'portal-jogos.token');

	return (
		<Flex
			justifyContent={'center'}
			alignItems={'center'}
			width={'100%'}
			minHeight={'100vh'}
			flexDir={'column'}
			bg={'linear-gradient(180deg, #25167b 0%, #010101 100%)'}
			gap={'10'}
		>
			<Heading
				color={'#f5f5f5'}
				fontSize={{
					base: '1.625rem',
					sm: '3.75rem',
					md: '3.75rem',
					lg: '5rem',
					xl: '5rem'
				}}
				// mb={4}
				textAlign={'center'}
				paddingBottom={2}
				borderBottom={'5px solid #C329FF'}
			>
				Faça seu login
			</Heading>
			<form onSubmit={handleSubmit(submitForm)}>
				<Flex
					flexDir={'column'}
					width={{
						base: '80vw',
						sm: '80vw',
						md: '50vw',
						lg: '40vw',
						xl: '25vw'
					}}
				>
					<FormControl>
						<FormLabel color={'#f5f5f5'}>Email</FormLabel>
						<Input
							type={'email'}
							color={'#f5f5f5'}
							placeholder={'Digite seu email'}
							_focus={{ borderColor: '#F000AD' }}
							{...register('Email')}
						/>
						{errors.Email?.message ? (
							<Text as={'b'} color={'red'}>
								{errors.Email.message}
							</Text>
						) : null}
					</FormControl>
					<FormControl>
						<FormLabel mt={4} color={'#f5f5f5'}>
							Senha
						</FormLabel>
						<Input
							type={'password'}
							color={'#f5f5f5'}
							placeholder={'Digite sua senha'}
							_focus={{ borderColor: '#F000AD' }}
							{...register('Senha')}
						/>
						{errors.Senha?.message ? (
							<Text as={'b'} color={'red'}>
								{errors.Senha.message}
							</Text>
						) : null}
					</FormControl>
					<Link
						alignSelf={'flex-end	'}
						as={NextLink}
						href={'/forget-password'}
						color={'white'}
						_hover={{ textDecoration: 'underline #C329FF' }}
					>
						Esqueci minha senha
					</Link>
					{isLoading == true ? (
						<Button
							isLoading
							mt={6}
							type={'submit'}
							colorScheme={'purple'}
							width={'100%'}
							rounded={'xl'}
							fontSize={'1.5rem'}
						>
							Entrar
						</Button>
					) : (
						<Button
							mt={6}
							type={'submit'}
							colorScheme={'purple'}
							width={'100%'}
							rounded={'xl'}
							fontSize={'1.5rem'}
						>
							Entrar
						</Button>
					)}
				</Flex>
			</form>
			<Link
				as={NextLink}
				href={'/register'}
				color={'white'}
				_hover={{ textDecoration: 'underline #B530F3' }}
			>
				Não tem uma conta? Registre-se
			</Link>
		</Flex>
	);
};
