import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Advanteges = () => {
    return (
<>
<Box align="center" bgColor="#fff" py={{base:"10", md:"70"}}>
    <Heading mb="10">What you get with Optimum</Heading>

  <SimpleGrid columns={{base:"1", md:"4"}} spacing={10} maxW="1250px">
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/Flexibility.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Speed & Reliability</Heading>
        <Text>Get a fast and reliable connection with whole home Wi-Fi on our 100% fiber network.</Text>
      </Box>
    </Flex>
    
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/Savings.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Value & Transparency</Heading>
        <Text>Enjoy low prices year after year, with no hidden fees and no surprises.</Text>
      </Box>
    </Flex>
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/Protection.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Risk-Free Experience</Heading>
        <Text>We install on-time, or pay you $20, and promise satisfaction with a 60-day money-back guarantee.</Text>
      </Box>
    </Flex>
    <Flex rounded="md" boxShadow="xl" bgColor="#F1F1F1" align="center" direction="column" >
      <Box bgColor="#F1F1F1" color="#000" w="100%" mb="" p="5">
        <Box pb="5">
          <Image src="/Flexibility.svg"/>
        </Box>

        <Heading pb="10px" as="h3" fontSize="2xl">Flexibility</Heading>
        <Text>Freedom to choose what works for you and change anytime without a contract or penalties</Text>
      </Box>
    </Flex>
  </SimpleGrid>
</Box>
</>
    )}

export default Advanteges