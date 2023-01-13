import React from 'react'
import {
    SimpleGrid,
    Box,
    Text
} from "@chakra-ui/react"
export default function Home() {
    
  return (
    <div style={{paddingTop:"200px"}}>
        <SimpleGrid columns={[1, null, 1]} spacing='70px' >
            <Box height='40px' >
                <Text 
                fontSize="55px" 
                fontWeight="bold">Hi, it's 
                    <b style={{
                        color:"black", 
                        fontSize : "65px"}}> Omkareshwari Khupse
                    </b>
                </Text>
            </Box>
            <Box height='40px'>
                <Text fontSize="32px">I am a professional
                    <h style={{
                            color:"brown", 
                            fontSize : "42px"}}> Full Stack Web Developer
                    </h> 
                </Text>
            </Box>
        </SimpleGrid>
        
    </div>
  )
}
