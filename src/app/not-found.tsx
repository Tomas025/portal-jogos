import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { WithSubnavigation } from 'components/NavBar';
import Link from 'next/link';

export default function notFound() {
    return (
        <Box
            width={'100%'}
            backgroundColor={'#120E27'}
            backgroundSize={'auto'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <WithSubnavigation />
            <Flex
                width={'100%'}
                minHeight={'93.55vh'}
                flexDir={'column'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
            >
                <Text 
                    as={'b'}
					color={'white'}
					fontSize={'5.625rem'}
					width={'50%'}
                    textAlign={'center'}>
                    404
                </Text>
                <Text
                    as={'b'}
					color={'white'}
					fontSize={'2rem'}
					width={'50%'}
                    textAlign={'center'}>
                    Eita! Página não encontrada.
                </Text>
                <Text 
                    as={'b'}
                    color={'white'}
                    fontSize={'1rem'}
                    width={'50%'}
                    textAlign={'center'}>
                Parece que você encontrou um caminho secreto para a página 404.<br />
                Volte ao mapa principal e continue sua busca!
                </Text>
                <Link href="/">
                    <Button
                        variant={'outline'}
                        borderColor={'#00FFF0'}
                        rounded={'5'}
                        color={'#00FFF0'}
                        _hover={{
                          backgroundColor: '#00FFF0',
                          color: '#0e0b1c'
                        }}
                        width={'15rem' }
                        height={{ lg: '4rem' }}
                        fontSize={{ lg: '1.5rem' }}
                    >
                        Voltar para o início
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}

