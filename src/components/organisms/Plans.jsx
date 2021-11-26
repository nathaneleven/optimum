import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/layout'
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
const Plans = () => {
    return (
<>
<Box align="center" bgColor="#fff" py={{base:"10", md:"70"}}>
    <Heading mb="10">Optimum Internet plans and prices</Heading>
<Flex maxW="1250px" flexDirection={"column"} >
    <Table borderBottomRadius="20px" size="lg" fontSize="21px" variant="striped" boxShadow="xl" colorScheme="gray">
  <Thead>
    <Tr bgGradient="linear(to-r, #24D9C3, #0084D6)">
      <Th borderTopStartRadius="20px" color="#fff" fontSize="24px">Optimum plan</Th>
      <Th color="#fff" fontSize="24px">Starting price*</Th>
      <Th color="#fff" fontSize="24px">Price after 12 mos.*</Th>
      <Th color="#fff" fontSize="24px">Download speed</Th>
      <Th borderTopEndRadius="20px" color="#fff" fontSize="24px">Upload speed</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Optimum 300</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >35</Box>/mo*</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >109</Box>.99/mo*</Td>
      <Td>300 Mbps</Td>
      <Td>20 Mbps</Td>
    </Tr>
    <Tr>
      <Td>Optimum 500</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >45</Box>/mo*</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >129</Box>.99/mo*</Td>
      <Td>500 Mbps</Td>
      <Td>20 Mbps</Td>
    </Tr>
    <Tr>
      <Td>Optimum 1 Gig</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >55</Box>/mo*</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >139</Box>.99/mo*</Td>
      <Td>940 Mbps</Td>
      <Td>35 Mbps</Td>
    </Tr>
    <Tr>
      <Td>Fiber Internet 500</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >35</Box>/mo*</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >129</Box>.99/mo*</Td>
      <Td>500 Mbps</Td>
      <Td>500 Mbps</Td>
    </Tr>
    <Tr>
      <Td borderBottomStartRadius="20px">Fiber Internet 1 Gig</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >45</Box>/mo*</Td>
      <Td>$<Box as="span" fontSize="45px" fontWeight="700" >139</Box>.99/mo*</Td>
      <Td>940 Mbps</Td>
      <Td borderBottomEndRadius="20px">940 Mbps</Td>
    </Tr>
  </Tbody>
</Table>
<Text pt="12">*Pricing per month plus taxes for length of contract. Additional fees and terms may apply. Pricing varies by location and availability. All prices are subject to change at any time. May or may not be available based on service address.</Text>
</Flex>
  
      
</Box>
</>
    )}


export default Plans