import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import sustainability_img from "../Assets/sustainability_img.jpg";

const Mid3 = () => {
  return (
    <Flex
      p={"30px"}
      justifyContent={"space-between"}
     
      fontFamily={"Inter, sans-serif"}
    >
      <Box w={"50%"} >
        <Image src={sustainability_img} width={"100%"} />
      </Box>

      <Box w={"46%"}  position={"relative"}>
        <Heading
          fontWeight={"500"}
          textAlign={"left"}
          lineHeight={"55.9px"}
          color={"#ff3a2d"}
          fontSize={"45px"}
          backgroundColor={"rgba(255,255,255,0.25)"}
        >
          Sustainability
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
          Environmental stewardship is a priority for NTWIST. We help our
          customers to minimize their sustainability impact on the planet.
          Emissions or environmental targets are used alongside productivity
          targets to define success for our customers.
          <br />
          <br />
          With the increasing relevance of carbon accounting and emissions
          tracking, NTWIST offers a suite of tools to increase visibility into
          environmental performance and help processing plants track, manage,
          optimize, and report key metrics.
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
  );
};

export default Mid3;
