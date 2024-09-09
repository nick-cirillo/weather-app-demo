import React from 'react';
import {
    Heading,
    Text,
    Box, Flex, Image, Center, VStack, Button, Link
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Design(props) {
    return (
        <Box
  backgroundImage="coffee.jpg" // Replace with your desired image URL
  backgroundSize="cover" // Ensures the background image covers the entire Box area
  backgroundPosition="center" // Centers the background image
  minHeight="100vh" // Ensures the Box covers the full viewport height
  width="100vw" // Ensures the Box covers the full viewport width
  overflow="hidden" // Prevents any content overflow
>
  <VStack align="right" textAlign="left" spacing="4" mt={100}>
    <Text fontSize="9xl" color="black" align="center" >
      Cold Brew Design
    </Text>
    <Text fontSize="xl" mt={370} color="black" align="center" 
    >We design different types of cold brews!</Text>
    
    
  </VStack>
</Box>
    );
}

export default Design;