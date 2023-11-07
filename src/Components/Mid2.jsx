import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import mine_img from '../Assets/mine_img.jpg';

const Mid2 = () => {
  return (
    <Flex  p={'30px'} justifyContent={'space-between'}  fontFamily={"Inter, sans-serif"} >
        <Box w={'46%'}  position={"relative"} >
            <Heading fontWeight={'500'} textAlign={"left"} lineHeight={"55.9px"} color={'#ff3a2d'} fontSize={'45px'} backgroundColor={"rgba(255,255,255,0.25)"}>Mine-To-Mill-To-Mine Optimization</Heading>
            <Text m={'20px 0 30px 0'} lineHeight={"26.9px"} fontFamily={"sans-serif"} margin={"15px 0px"} textAlign={"justify"} 
            fontWeight={"medium"} fontSize={"medium"} fontStyle={"normal"}>
            NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit 
            gold mines by connecting siloed data sources like block models,fleet management systems, 
            stockpile surveys, and plant instruments.This allows your company to better track material
             flow, and feed properties, identify plan/production discrepancies, and correct resource models 
             and production plans.</Text>
            <Button position={"absolute"} left={"0"} bottom={"0"}  fontWeight={"extrabold"} fontSize={"large"}  padding={"10px"} width={"150px"} borderRadius={"5px"}
             textDecoration={"none"}  border={"none"} bg={'#ff3a2d'} color={'rgba'} _hover={{ background: '#f57067' }}>Read More</Button>
        </Box>
        <Box w={'50%'} >
            <Image src={mine_img} width={"100%"}/>
        </Box>
    </Flex>
  )
}

export default Mid2;