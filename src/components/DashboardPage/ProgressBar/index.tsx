'use client'
import { Box, Card, Flex, Progress, Text } from "@chakra-ui/react";

interface xpProps {
	xp: number;
}

export default function ProgressBar(props: xpProps) {
    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Card
                bg={'#120E27'}
				width={{ lg: '100%' }}
				height={{ lg: '12.5rem' }}
				rounded={'14px'}
				borderTop={'34px solid #2A2156'}
				justifyContent={'space-between'}
				alignItems={'center'}>
                <Box
                    width={'100%'}
                    padding={3}
                    paddingLeft={'70px'}>
                    <Text
                        color={'#F5F5F5'}
                        fontWeight={'300'}
                        fontSize={'2rem'}
                        paddingBottom={'2%'}>
                        Seu progresso até a próxima insignia:
                    </Text>
                    <Progress
                        value={props.xp}
                        size={'xs'}
                        maxWidth={'90%'}
                        minWidth={'90%'}
                        colorScheme={'purple'}
                        width={'90%'}
                        height={'1.4rem'}
                        borderRadius={'10px'}
                            
                    />
                    </Box>
            </Card>
        </Flex>
    )
}