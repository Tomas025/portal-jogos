import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';

import { Flex, Text, Heading, Button } from '@chakra-ui/react';

import ComplementaryMaterial from '../ComplementaryMateial';
import { Aula } from '../type';
import styles from './styles.module.scss';

interface VideoSectionProps {
	aula: Aula | undefined;
}

export default function VideoSection({ aula }: VideoSectionProps) {
	return (
		<Flex width={'100%'}>
			{aula ? (
				<Flex
					flexDir={'column'}
					justifyContent={'flex-start'}
					width={'100%'}
				>
					<Text fontSize={'1.25rem'} fontWeight={400}>
						Modulo 1 | Desenvolvimento de jogos 2D em Unity
					</Text>
					<Heading>
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
						<Flex height={'18vh'} overflowY={'scroll'}>
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
							>
								Concluir aula
							</Button>
							<Flex gap={3}>
								<FiThumbsUp size="25" color={'#12E300'} />
								<FiThumbsDown size="25" color={'#F00'} />
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
