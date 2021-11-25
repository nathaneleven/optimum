import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const About = () => {
    return (
        <>
        <Stack bgColor="#F1F1F1" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#000" mb="24px">
                    About Optimum
                    </Heading>
                        <Text>
                        Based in Long Island, New York, Optimum is owned by Altice. Altice bought Cablevision in 2016, and Optimum was part of that deal. Altice also owns several other communications companies like Suddenlink, Cheddar, and Altice Mobile. <br/><br/>

                        Besides cable broadband, Optimum also offers fiber internet services. The ISP fiber service is available to about 1.6 million people, making Optimum the 10th largest fiber provider in the United States by coverage area. 
                        </Text>
                </Box>
                </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/about-optimum-image.jpg" alt="About Image Optimum" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About