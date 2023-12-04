'use client';
import { useEffect, useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import { api } from 'services/api';

import { CardAulas } from './CardModule';
import { Aula, Modulo } from './type';

export default function ClassPage() {
	const [aula, setAula] = useState<Aula>();
	const [modulos, setModulos] = useState<Modulo[]>();

	const handleAulaChange = (novaAula: Aula) => {
		setAula(novaAula);
		console.log(aula);
	};

	useEffect(() => {
		(async () => {
			const response = await api.get('/modulos/cursoId/3');
			setModulos(response.data);
		})();
	}, []);

	return (
		<Box width={'100%'} height={'100vh'}>
			<Flex
				width={'100vw'}
				height={'100vh'}
				flexDirection={'row'}
				justifyContent={'center'}
				alignItems={'center'}
				bg={'gray'}
				gap={4}
			>
				<Flex
					width={'26vw'}
					height={'88vh'}
					rounded={'21px'}
					bg={'#120E27'}
					flexDir={'column'}
					alignItems={'center'}
					gap={4}
					padding={'35px'}
				>
					{modulos?.map((modulo) => (
						<CardAulas
							key={modulo.Id}
							onAulaChange={handleAulaChange}
							{...modulo}
						/>
					))}
				</Flex>
				<Flex>
					<Box
						width={'60vw'}
						height={'88vh'}
						bg={'#120E27'}
						rounded={'21px'}
					>
						<Text>Faça seu componente aqui{aula?.Descricao}</Text>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}
