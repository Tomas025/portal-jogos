'use client';

import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";


export default function LastAchievement() {
    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Card
                bg={'#120E27'}
				width={{ lg: '22rem' }}
				height={{ lg: '22rem' }}
				rounded={'14px'}
				borderTop={'34px solid #2A2156'}
				justifyContent={'center'}
				alignItems={'center'}>
                    <CardBody
                        width={{ lg: '1591px' }}
					    display={'flex'}
					    justifyContent={'center'}
					    alignItems={'center'}
					    flexDir={'column'}>
                        <Image 
                            src={"/img/Star2.png"} 
                            alt="Last Achievement" 
                            width={100} 
                            height={100} />
                        <Text 
                            color={'#F5F5F5'}
						    fontWeight={'500'}
						    fontSize={'2rem'}
                            paddingTop={55}
                        >
                            Introdução ao Python
                        </Text>
                    </CardBody>
            </Card>
        </Flex>
    );
}