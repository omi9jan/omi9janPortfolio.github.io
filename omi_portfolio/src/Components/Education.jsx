import React from 'react';
import Styles from "../Styles/Education.css";
import {
    SimpleGrid,
    Box,
    Image,
    Container,
    VStack
} from "@chakra-ui/react";

export default function Education() {
  return (
    <div className='edu-app'>
        <h1>Education</h1>
        <SimpleGrid columns={1} spacing={10} width="80%" margin='auto'>
            <Box>
                <Box border='2px solid black' height='80px'>
                    <VStack>
                        <Container maxW='md' bg='blue.600' color='white'>
                            Present
                        </Container>
                        <Container maxW='550px' bg='purple.600' color='white'>
                            Full Stack Web Developer
                        </Container>
                        <Container maxW='container.sm' bg='green.400' color='#262626'>
                            Masai School Bengaluru, Karnataka
                        </Container>
                    </VStack>
                </Box>
                <Box border='2px solid black' height='80px'>
                    <VStack>
                        <Container maxW='md' bg='blue.600' color='white'>
                            2020
                        </Container>
                        <Container maxW='550px' bg='purple.600' color='white'>
                            Bachelor of Engineering
                        </Container>
                        <Container maxW='container.sm' bg='green.400' color='#262626'>
                            P.R. Pote College of Engineering & Management, Amravati
                        </Container>
                    </VStack>
                </Box>
                <Box border='2px solid black' height='80px'>
                    <VStack>
                        <Container maxW='md' bg='blue.600' color='white'>
                            2016
                        </Container>
                        <Container maxW='550px' bg='purple.600' color='white'>
                            Higher Secondary Certificate
                        </Container>
                        <Container maxW='container.sm' bg='green.400' color='#262626'>
                            Vidya Bharti Mahavidyalaya, Amravati
                        </Container>
                    </VStack>
                </Box>
                <Box border='2px solid black' height='80px'>
                    <VStack>
                        <Container maxW='md' bg='blue.600' color='white'>
                            2014
                        </Container>
                        <Container maxW='550px' bg='purple.600' color='white'>
                            Secondary School Certificate
                        </Container>
                        <Container maxW='container.sm' bg='green.400' color='#262626'>
                            Shri Ganeshdas Rathi Vidyalaya
                        </Container>
                    </VStack>
                </Box>
            </Box>
            <Box>
                <Image/>
            </Box>
            
        </SimpleGrid>
        

    </div>
  )
}
