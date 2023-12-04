'use client';
import { useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';
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
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
			>
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
						<CardAulas
							key={modulo.Id}
							onAulaChange={handleAulaChange}
							{...modulo}
						/>
					))}
				</Flex>
			</Flex>
		</Box>
	);
}
