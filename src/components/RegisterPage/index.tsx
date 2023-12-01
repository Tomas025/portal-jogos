'use client';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiUser, FiMail, FiLock, FiAtSign } from 'react-icons/fi';

import {
	Flex,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Button,
	Text,
	Link,
	useToast,
	InputGroup,
	InputLeftElement,
	Select
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from 'services/api';
import * as yup from 'yup';

import styles from './styles.module.scss';
import { RegisterFormProps, types } from './type';

const RegisterFormSchema = yup.object().shape({
	userName: yup.string().required('Nome de usuário obrigatório'),
	tagName: yup.string().required('TagName obrigatório'),
	email: yup.string().required('Email obrigatório').email('Email inválido'),
	type: yup
		.mixed<types>()
		.oneOf(Object.values(types))
		.required('Seu tipo de usuario é obrigatório'),
	password: yup.string().required('Senha obrigatória'),
	repeatPassword: yup
		.string()
		.required('Digite sua senha novamente')
		.oneOf([yup.ref('password')], 'Confirmação de senha não confere')
});

export const RegisterPage = () => {
	const toast = useToast();
	const { push } = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegisterFormProps>({
		resolver: yupResolver(RegisterFormSchema)
	});

	function redirect() {
		push('/login');
	}

	const submitForm: SubmitHandler<RegisterFormProps> = ({
		userName,
		tagName,
		email,
		type,
		password
	}) => {
		setIsLoading(true);

		api.post('/pessoas', {
			Nome: userName,
			Email: email,
			Senha: password,
			Username: tagName,
			Tipo: type
		})
			.then(() => {
				console.log('Cadastro realizado com sucesso');
				toast({
					title: 'Cadastro realizado com sucesso',
					description: 'Você será redirecionado para efetuar o login',
					status: 'success',
					position: 'top',
					duration: 5000,
					isClosable: true
				});

				setTimeout(redirect, 2000);
			})
			.catch((error) => {
				console.log(error);
				if (error.response.status != 409) {
					toast({
						title: 'Erro ao realizar login',
						description:
							'Ocorreu algum erro na hora de realizar o cadastro',
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

	return (
		<Flex
			justifyContent={'center'}
			alignItems={'center'}
			width={'100%'}
			height={'100vh'}
			padding={'2%'}
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
				Faça seu registro
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
						<FormLabel color={'#f5f5f5'}>Nome de usuário</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents={'none'}>
								<FiUser className={styles.icons} />
							</InputLeftElement>
							<Input
								type={'text'}
								color={'#f5f5f5'}
								placeholder={'Digite seu nome de usuário'}
								_focus={{ borderColor: '#F000AD' }}
								{...register('userName')}
							/>
						</InputGroup>
						{errors.userName?.message ? (
							<Text as={'b'} color={'red'}>
								{errors.userName.message}
							</Text>
						) : null}
					</FormControl>
					<FormControl>
						<FormLabel mt={4} color={'#f5f5f5'}>
							TagName
						</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents={'none'}>
								<FiAtSign className={styles.icons} />
							</InputLeftElement>
							<Input
								type={'text'}
								color={'#f5f5f5'}
								placeholder={'Digite sua tagName'}
								_focus={{ borderColor: '#F000AD' }}
								{...register('tagName')}
							/>
						</InputGroup>
						{errors.userName?.message ? (
							<Text as={'b'} color={'red'}>
								{errors.userName.message}
							</Text>
						) : null}
					</FormControl>
					<FormControl>
						<FormLabel mt={4} color={'#f5f5f5'}>
							Email
						</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents={'none'}>
								<FiMail className={styles.icons} />
							</InputLeftElement>
							<Input
								type={'email'}
								color={'#f5f5f5'}
								placeholder={'Digite seu email'}
								_focus={{ borderColor: '#F000AD' }}
								{...register('email')}
							/>
						</InputGroup>
						{errors.email?.message ? (
							<Text as={'b'} color={'red'}>
								{errors.email.message}
							</Text>
						) : null}
					</FormControl>
					<FormControl>
						<FormLabel mt={4} color={'#f5f5f5'}>
							Escolha qual o tipo da sua conta
						</FormLabel>
						<Select
							appearance={'none'}
							color={'gray'}
							placeholder={'Escolha uma das opções'}
							{...register('type')}
						>
							<option value={types.ALUNO}>Aluno</option>
							<option value={types.CRIADOR_CONTEUDO}>
								Criador de Conteúdo
							</option>
						</Select>
					</FormControl>
					<FormControl>
						<FormLabel mt={4} color={'#f5f5f5'}>
							Senha
						</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents={'none'}>
								<FiLock className={styles.icons} />
							</InputLeftElement>
							<Input
								type={'password'}
								color={'#f5f5f5'}
								placeholder={'Digite sua senha'}
								_focus={{ borderColor: '#F000AD' }}
								{...register('password')}
							/>
						</InputGroup>
						{errors.password?.message ? (
							<Text as={'b'} color={'red'}>
								{errors.password.message}
							</Text>
						) : null}
					</FormControl>
					<FormControl>
						<FormLabel mt={4} color={'#f5f5f5'}>
							Confirme sua senha
						</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents={'none'}>
								<FiLock className={styles.icons} />
							</InputLeftElement>
							<Input
								type={'password'}
								color={'#f5f5f5'}
								placeholder={'Digite sua senha novamente'}
								_focus={{ borderColor: '#F000AD' }}
								{...register('repeatPassword')}
							/>
						</InputGroup>
						{errors.repeatPassword?.message ? (
							<Text as={'b'} color={'red'}>
								{errors.repeatPassword.message}
							</Text>
						) : null}
					</FormControl>
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
				href={'/login'}
				color={'white'}
				_hover={{ textDecoration: 'underline #C329FF' }}
			>
				Você já tem um cadastro? Faça seu login
			</Link>
		</Flex>
	);
};
