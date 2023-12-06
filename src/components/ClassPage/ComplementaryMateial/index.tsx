'use client';
import { useEffect, useState } from 'react';
import { FiLink } from 'react-icons/fi';

import { Link } from '@chakra-ui/next-js';
import { Flex, Heading } from '@chakra-ui/react';
import { api } from 'services/api';

import { Material } from './type';

interface Props {
	aulaId: number | undefined;
}

export default function ComplementaryMaterial({ aulaId }: Props) {
	const [materias, setMaterias] = useState<Material[]>([]);

	useEffect(() => {
		(async () => {
			const response = await api.get(`materias/aulaId/${aulaId}`);
			setMaterias(response.data);
		})();
	}, [aulaId]);

	return (
		<Flex
			bg="#ff000000"
			width={'13.2vw'}
			// height={'389px'}
			border={'1px solid #00FFF0'}
			rounded={'12px'}
			flexDirection={'column'}
			justifyContent={'flex-start'}
			alignItems={'center'}
		>
			<Heading fontSize={'1.125rem'} fontWeight={'500'} marginTop={'2vh'}>
				Materiais Complementares
			</Heading>
			<Flex
				flexDirection={'column'}
				justifyContent={'flex-start'}
				padding={'10px'}
			>
				{materias.map((material) => (
					<Flex
						key={material.Id}
						width={'100%'}
						justifyContent={'flex-start'}
						gap={4}
					>
						<Link href={material.URL} isExternal>
							<Flex alignItems={'center'} gap={1}>
								{material.Nome}

								<FiLink color={'#00FFF0'} />
							</Flex>
						</Link>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
}
