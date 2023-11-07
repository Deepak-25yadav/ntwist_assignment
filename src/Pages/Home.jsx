import { Box } from '@chakra-ui/react';
import React from 'react'
import NavbarMid1 from '../Components/NavbarMid1';
import Mid2 from '../Components/Mid2';
import Mid3 from '../Components/Mid3';
import Mid4 from '../Components/Mid4';
import Mid5 from '../Components/Mid5';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <Box w='100%'>
        <NavbarMid1/>
       <Box  margin={"0px 70px 0px 70px"}>
       <Mid2/>
        <Mid3/>
        <Mid4/>
        <Mid5/>
       </Box>
        <Footer/>
    </Box>
  )
}

export default Home;