import React from 'react';
import Styles from "../Styles/About.css";
import {
    SimpleGrid,
    Box,
    Image,
    Container,
    Heading,
    Button
} from "@chakra-ui/react"
import profilepic from "../Images/profilepic.png";

export default function About() {
  return (
    <div style={{
        // border : "2px solid black",
        padding: "40px",
        height : "650px",
        backgroundColor : "grey"
        }}>
            
        <SimpleGrid columns={1} spacing={10} >
            <Heading>About me</Heading>
            <Box>
                <SimpleGrid columns={2} spacing={0} gap={1} paddingLeft="10%" paddingRight="10%">
                    <Box  height='80px'>
                        <Image
                            borderRadius='full'
                            boxSize='380px'
                            src={profilepic}
                            alt='profile_image'
                        />
                    </Box>
                    <Box w="100%" height='auto' marginTop="20px" justifyContent="center"  alignItems= "center">
                        <Container fontSize="25px" textAlign="left">
                            Motivated and innovative aspiring fullstack web developer with hands-on
                            experience in building websites with MERN
                            stack and various web technologies
                            including HTML, CSS, and JS. Passionate
                            about implementing and launching new
                            projects. Seeking a position in a dynamic
                            organization to do technical and practical
                            projects and to enhance and apply skills.
                        </Container>
                        <Box w="50%" marginLeft={-3} marginTop={5} >
                            <Button className='about-btn'>GET RESUME</Button>
                            <Button className='about-btn'>CONTACT</Button>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
            
        </SimpleGrid>
    </div>
  )
}
