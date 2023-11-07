import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import oil_gas from '../Assets/oil_gas.png';

const Mid5 = () => {
    return (


        <Flex
      p={"30px"}
      justifyContent={"space-between"}
      fontFamily={"Inter, sans-serif"}
    >
      <Box w={"50%"} border={"2px solid yellow"}>
        <Image src={oil_gas} width={"100%"} />
      </Box>

      <Box w={"46%"} border={"2px solid green"} position={"relative"}>
        <Heading
          fontWeight={"500"}
          textAlign={"left"}
          lineHeight={"55.9px"}
          color={"#ff3a2d"}
          fontSize={"45px"}
          backgroundColor={"rgba(255,255,255,0.25)"}
        >
          Oil & Gas
        </Heading>

        <Text
          m={"20px 0 30px 0"}
          lineHeight={"26.9px"}
          fontFamily={"sans-serif"}
          margin={"15px 0px"}
          textAlign={"justify"}
          fontWeight={"medium"}
          fontSize={"medium"}
          fontStyle={"normal"}
        >
           Oil and Gas plants require a high level of control and robustness in their operation 
            due to the high risks to people and environment.
                        <br />
                        <br />
         NTWIST helps Oil & Gas customers to analyze historical data, 
        identify opportunities for process control improvements, and reduce variability
        in any part of the process, thus providing enhanced reliability and safety.
        </Text>

        <Button
          position={"absolute"}
          left={"0"}
          bottom={"0"}
          fontWeight={"extrabold"}
          fontSize={"large"}
          padding={"10px"}
          width={"150px"}
          borderRadius={"5px"}
          textDecoration={"none"}
          border={"none"}
          bg={"#ff3a2d"}
          color={"rgba"}
          _hover={{ background: "#f57067" }}
        >
          Read More
        </Button>
      </Box>
      
    </Flex>

           
    )
}

export default Mid5;



