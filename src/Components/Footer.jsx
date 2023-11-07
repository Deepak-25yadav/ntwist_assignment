import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {BsLinkedin, BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer style={{backgroundColor : '#081528', padding : '55px 0',color:'rgba (255 255 255 0.6)'}}>
        <VStack justifyContent={'center'}>
            <Image w={'120px'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png'/>
            <Flex m={'10px 0'} gap={'30px'} color={'white'}>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Privacy Policy</Text>
                <Text>Sitemap</Text>
            </Flex>
            <Text m={'20px 0 15px 0'}  color={"#6F7F92"}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
            <Flex gap={'10px'}>
                <Button _hover={{backgroundColor : '#000000'}} _active={'none'} bg={"transparent"}
                border={"none"} padding={"10px"} fontSize={"large"} textDecoration={"none"} color={'white'}><BsTwitter/></Button>

                <Button _hover={{backgroundColor : '#132b4f'}} _active={'none'} bg={"transparent"}
               border={"none"} padding={"10px"} fontSize={"large"} color={'white'}><BsLinkedin/></Button>
            </Flex>
            <Text mt={'10px'} color={"#6F7F92"}>© 2022. Ntwist Inc.</Text>
        </VStack>
    </footer>
  )
}

export default Footer;