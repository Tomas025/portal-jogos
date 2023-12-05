'use client';
import { useEffect, useState } from 'react';
import { FiLink } from 'react-icons/fi';

import { Link } from '@chakra-ui/next-js';
import { Flex, Heading } from '@chakra-ui/react';
import { api } from 'services/api';

import { Material } from './type';

// const materias: Material[] = [
// 	{
// 		Id: 1,
// 		Nome: 'handguide.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://www.sbgames.org/sbgames2012/proceedings/papers/tutoriais/tutorial-05.pdf',
// 		fk_Aula_Id: 1
// 	},
// 	{
// 		Id: 2,
// 		Nome: 'Programando na Unity 3D.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://profsalu.files.wordpress.com/2018/08/3-unity-3d-programac3a7c3a3o01.pdf',
// 		fk_Aula_Id: 1
// 	},
// 	{
// 		Id: 3,
// 		Nome: 'playground.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://profsalu.files.wordpress.com/2018/08/3-unity-3d-programac3a7c3a3o01.pdf',
// 		fk_Aula_Id: 1
// 	},
// 	{
// 		Id: 4,
// 		Nome: 'playground.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://profsalu.files.wordpress.com/2018/08/3-unity-3d-programac3a7c3a3o01.pdf',
// 		fk_Aula_Id: 2
// 	},
// 	{
// 		Id: 5,
// 		Nome: 'playground.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://profsalu.files.wordpress.com/2018/08/3-unity-3d-programac3a7c3a3o01.pdf',
// 		fk_Aula_Id: 3
// 	},
// 	{
// 		Id: 6,
// 		Nome: 'playground.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://profsalu.files.wordpress.com/2018/08/3-unity-3d-programac3a7c3a3o01.pdf',
// 		fk_Aula_Id: 4
// 	},
// 	{
// 		Id: 7,
// 		Nome: 'playground.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://profsalu.files.wordpress.com/2018/08/3-unity-3d-programac3a7c3a3o01.pdf',
// 		fk_Aula_Id: 5
// 	},
// 	{
// 		Id: 8,
// 		Nome: 'playground.pdf',
// 		Tipo: 'pdf',
// 		URL: 'https://profsalu.files.wordpress.com/2018/08/3-unity-3d-programac3a7c3a3o01.pdf',
// 		fk_Aula_Id: 6
// 	}
// ];

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
			width={'255px'}
			height={'389px'}
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

								<FiLink color={'red'} />
							</Flex>
						</Link>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
}
