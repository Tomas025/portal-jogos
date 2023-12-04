'use client';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Link } from '@chakra-ui/next-js';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { api } from 'services/api';

import styles from './styles.module.scss';

type Modulo = {
	Id: number;
	Titulo: string;
	Descricao: string;
	Sequencia: number;
	fkCursoId: number;
};

export default function CardModule() {
	const [modulos, setModulos] = useState<Modulo[]>();

	useEffect(() => {
		(async () => {
			const response = await api.get('/modulos/cursoId/3');
			setModulos(response.data);
		})();
	}, []);

	return (
		<>
			<Flex
				width={'31.4375rem'}
				height={'50.6875rem'}
				rounded={'21px'}
				bg={'#120E27'}
				flexDir={'column'}
				alignItems={'center'}
				gap={4}
				padding={'35px'}
			>
				{modulos?.map((modulo) => (
					<CardAulas key={modulo.Id} {...modulo} />
				))}
			</Flex>
		</>
	);
}

function CardAulas(modulo: Modulo) {
	const [aulas, setAulas] = useState<Modulo[]>([]);
	const [expandido, setExpandido] = useState(false);

	const handleToggleExpandir = () => {
		setExpandido(!expandido);
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
							<FiChevronUp size="18px" />
						) : (
							<FiChevronDown size="18px" />
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
								<Link href={'/class'}>{aula.Descricao}</Link>
							</Text>
						))}
				</Stack>
			</Flex>
		</>
	);
}
