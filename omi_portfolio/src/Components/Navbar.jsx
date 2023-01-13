import React from 'react';
import Home from './Home';
import {
    Flex,
    Box,
    Heading,
    Spacer,
    Text
} from "@chakra-ui/react"

export default function Navbar() {
    const Styles = {
        backgroundImage:"url('https://wbsdigital.co.za/wp-content/uploads/2020/07/dell-background-scaled.jpg')",
        height : "800px",
        width : "100%",
        backgroundSize: "100%",  
        color: "white"
 }
  return (
    <div style={Styles}>
        <Flex minWidth='max-content'  alignItems='center' gap='2' padding="5px">
            <Box p='2'>
                <Heading size='xl' >Omkareshwari</Heading>
            </Box>
            <Spacer />
            <Flex gap='10' color="black" >
                <Heading size="md">
                    <Text >Home</Text>
                </Heading>
                <Heading size="md" >
                    <Text>About me</Text>
                </Heading>
                <Heading size="md" >
                    <Text>Skills</Text>
                </Heading>
                <Heading size="md">
                    <Text>Projects</Text>
                </Heading>
                <Heading size="md">
                    <Text>Github</Text>
                </Heading>
                <Heading size="md">
                    <Text>Contact</Text>
                </Heading>
                <Heading size="md">
                    <Text>Resume</Text>
                </Heading>
            </Flex>
        </Flex>
        <Home/>
    </div>
  )
}
