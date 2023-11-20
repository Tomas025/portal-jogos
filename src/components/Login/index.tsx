'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
	useToast
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'nookies';
import { api } from 'services/api';
import * as yup from 'yup';

import { LoginFormProps } from './type';

const LoginFormSchema = yup.object().shape({
	email: yup.string().required('Email obrigatório').email('Email inválido'),
	password: yup.string().required('Senha obrigatória')
});

export const LoginPage = () => {
	const toast = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<LoginFormProps>({ resolver: yupResolver(LoginFormSchema) });

	const submitForm: SubmitHandler<LoginFormProps> = ({ email, password }) => {
		api.post('/auth/login', { email, password })
			.then((response) => {
				setCookie(
					undefined,
					'portal-jogos.token',
					response.data.access_token,
					{
						maxAge: 60 * 60 * 1 // 1 hour
					}
				);
			})
			.catch((error) => {
				toast({
					title: 'Erro ao fazer login',
					description: error.message,
					status: 'error',
					duration: 5000,
					isClosable: true
				});
			});
	};

	// para destruir o cookie:
	// destroyCookie(undefined, 'portal-jogos.token');

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			flexDir="column"
			bg="linear-gradient(180deg, #25167b 0%, #010101 100%)"
			gap="10"
		>
			<Heading
				color="#f5f5f5"
				fontSize={{
					base: '26',
					sm: '60',
					md: '60',
					lg: '72',
					xl: '72'
				}}
				// mb={4}
				textAlign="center"
				paddingBottom={2}
				borderBottom="5px solid #C329FF"
			>
				Faça seu login
			</Heading>
			<Box
				width={{
					base: '100vw',
					sm: '100vw',
					md: '50vw',
					lg: '40vw',
					xl: '25vw'
				}}
				// p={8}
				borderRadius={8}
				boxShadow="lg"
			>
				<form action="" onSubmit={handleSubmit(submitForm)}>
					<FormControl>
						<FormLabel color="#f5f5f5">Email</FormLabel>
						<Input
							type="email"
							color="#f5f5f5"
							placeholder="Digite seu email"
							_focus={{ borderColor: '#F000AD' }}
							{...register('email')}
						/>
						{errors.email?.message ? (
							<Text as="b" color="red">
								{errors.email.message}
							</Text>
						) : null}
					</FormControl>
					<FormControl>
						<FormLabel mt={4} color="#f5f5f5">
							Senha
						</FormLabel>
						<Input
							type="password"
							color="#f5f5f5"
							placeholder="Digite sua senha"
							_focus={{ borderColor: '#F000AD' }}
							{...register('password')}
						/>
						{errors.password?.message ? (
							<Text as="b" color="red">
								{errors.password.message}
							</Text>
						) : null}
					</FormControl>
					<Button
						isLoading
						mt={6}
						type="submit"
						colorScheme="red"
						width="100%"
					>
						Entrar
					</Button>
				</form>
			</Box>
		</Box>
	);
};
