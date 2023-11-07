import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import mineral_img from "../Assets/mineral_img.jpg";

const Mid4 = () => {
  return (
    <Flex
      p={"30px"}
      justifyContent={"space-between"}                      
     
      fontFamily={"Inter, sans-serif"}
    >
      <Box w={"46%"}   bg={"blue.300"} display={"flex"} justifyContent={"center"} alignItems={"center"}>

        <Box  width={"100%"} height={"60%"} bg={"yellow.300"} position={"relative"}>
              
        <Heading
          fontWeight={"500"}
          textAlign={"left"}
          lineHeight={"55.9px"}
          color={"#ff3a2d"}
          fontSize={"45px"}
          backgroundColor={"rgba(255,255,255,0.25)"}
        >
          Mineral Processing
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
          NTWIST offers a number of solutions for mills, concentrators, and
          leach plants. Our solutions help operations to reduce the effect of
          feed variability, avoid downtime and increase peak throughput while
          decreasing energy and reagent consumption.
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

      </Box>

      <Box w={"50%"} border={"2px solid yellow"}>
        <Image src={mineral_img} width={"100%"} />
      </Box>

    </Flex>
  );
};

export default Mid4;


