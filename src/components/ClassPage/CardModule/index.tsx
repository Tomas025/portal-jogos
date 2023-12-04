'use client';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Link } from '@chakra-ui/next-js';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { api } from 'services/api';

import { Aula, Modulo } from '../type';
import styles from './styles.module.scss';

interface CardAulasProps extends Modulo {
	onAulaChange: (novaAula: Aula) => void;
}

export function CardAulas({ onAulaChange, ...modulo }: CardAulasProps) {
	const [aulas, setAulas] = useState<Aula[]>([]);
	const [expandido, setExpandido] = useState(false);

	const handleToggleExpandir = () => {
		setExpandido(!expandido);
	};

	const handleAulaClick = (novaAula: Aula) => {
		onAulaChange(novaAula);
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await api.get(`aulas/moduloId/${modulo.Id}`);
				setAulas(response.data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [modulo.Id]);

	return (
		<>
			<Flex
				width={'100%'}
				height={
					expandido ? `${styles.expanded}` : `${styles.collapsed}`
				}
				rounded={'10px'}
				bg="#0E0B1D"
				overflow={'hidden'}
				className={
					expandido ? `${styles.expanded}` : `${styles.collapsed}`
				}
			>
				<Stack width={'100vw'} padding={'25px 15px'}>
					<Flex
						width={'100%'}
						justifyContent={'space-between'}
						onClick={handleToggleExpandir}
						style={{ cursor: 'pointer' }}
					>
						<Heading
							color={'#F5F5F5'}
							fontSize={'1.25rem'}
							fontWeight={'400'}
							lineHeight={'normal'}
						>
							{modulo.Titulo}
						</Heading>
						{expandido ? (
							<FiChevronUp className={styles.Icon} />
						) : (
							<FiChevronDown className={styles.Icon} />
						)}
					</Flex>
					{expandido &&
						aulas?.map((aula) => (
							<Text
								key={aula.Id}
								color={'#F5F5F5'}
								fontSize={'1.25rem'}
								fontWeight={'400'}
								lineHeight={'normal'}
							>
								<Link
									href={'/class'}
									onClick={() => handleAulaClick(aula)}
								>
									Aula {aula.Sequencia} | {aula.Titulo}
								</Link>
							</Text>
						))}
				</Stack>
			</Flex>
		</>
	);
}
