'use client';
import { useState } from 'react';
import {
	BsHandThumbsUp,
	BsFillHandThumbsUpFill,
	BsHandThumbsDown,
	BsFillHandThumbsDownFill
} from 'react-icons/bs';

import { userProps } from 'components/ProfilePage/type';

import { Flex, Text, Heading, Button, useToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { api } from 'services/api';

import ComplementaryMaterial from '../ComplementaryMateial';
import { Aula } from '../type';
import styles from './styles.module.scss';

interface VideoSectionProps {
	aula: Aula | undefined;
}

export default function VideoSection({ aula }: VideoSectionProps) {
	const myUser = Cookies.get('user');
	const [user] = useState<userProps | null>(jwtDecode(myUser!) || null);
	const [like, setLike] = useState(false);
	const [dislike, setDislike] = useState(false);
	const toast = useToast();

	const upXP = () => {
		api.patch(`/pessoas/${user?.result?.Id}`, { XP: aula?.XP })
			.then(() => {
				toast({
					title: 'XP atualizado com sucesso!',
					status: 'success',
					position: 'top',
					duration: 2000,
					isClosable: true
				});
				console.log('XP atualizado');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Flex width={'100%'}>
			{aula ? (
				<Flex
					flexDir={'column'}
					justifyContent={'flex-start'}
					width={'100%'}
				>
					<Text
						fontSize={'1.25rem'}
						fontWeight={400}
						color={'#f5f5f5'}
					>
						Modulo 1 | Desenvolvimento de jogos 2D em Unity
					</Text>
					<Heading color={'#f5f5f5'}>
						Aula {aula.Sequencia} | {aula.Titulo}
					</Heading>
					<Text
						fontSize={'1.25rem'}
						color={'#F000AD'}
						fontWeight={'200'}
						fontStyle={'normal'}
					>
						{aula.XP}XP
					</Text>
					<Flex gap={5}>
						<iframe
							className={styles.frameVideo}
							src={`https://www.youtube.com/embed/${aula.UrlVideo}`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
						{aula?.Id && (
							<ComplementaryMaterial aulaId={aula?.Id} />
						)}
					</Flex>
					<Flex
						flexDir={'column'}
						width={'38vw'}
						height={'100%'}
						justifyContent={'space-between'}
					>
						<Flex height={'18vh'} color={'#f5f5f5'}>
							<Text>{aula.Descricao}</Text>
						</Flex>
						<Flex
							flexDir={'row'}
							justifyContent={'flex-start'}
							alignItems={'center'}
							gap={10}
						>
							<Button
								variant={'outline'}
								borderColor={'#00FFF0'}
								rounded={'5'}
								color={'#00FFF0'}
								_hover={{
									backgroundColor: '#00FFF0',
									color: '#0e0b1f'
								}}
								width={{ lg: '14rem' }}
								height={{ lg: '3rem' }}
								fontSize={{ lg: '1.5rem' }}
								onClick={upXP}
							>
								Concluir aula
							</Button>
							<Flex gap={3}>
								<div onClick={() => setLike(!like)}>
									{like && (
										<BsFillHandThumbsUpFill
											size="25"
											color={'#12E300'}
											cursor={'pointer'}
										/>
									)}
									{!like && (
										<BsHandThumbsUp
											size="25"
											color={'#12E300'}
											cursor={'pointer'}
										/>
									)}
								</div>
								<div
									style={{ transform: 'scaleX(-1)' }}
									onClick={() => setDislike(!dislike)}
								>
									{dislike && (
										<BsFillHandThumbsDownFill
											size="25"
											color={'#F00'}
											cursor={'pointer'}
										/>
									)}
									{!dislike && (
										<BsHandThumbsDown
											size="25"
											color={'#F00'}
											cursor={'pointer'}
										/>
									)}
								</div>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<></>
			)}
		</Flex>
	);
}
