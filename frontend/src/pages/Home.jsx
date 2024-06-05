import { Box, Button, HStack, Heading, Image, SimpleGrid, Container, Stack, Text, ScaleFade } from '@chakra-ui/react'
import React, { useState } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import image1 from '/birthdayPoster1.jpg'
import image2 from '/birthdayPoster2.jpg'
import image3 from '/birthdayPoster3.jpg'
import CustomCard from '../components/CustomCard';
import Confetti from 'react-confetti';
import { transform } from 'framer-motion';
import rabbit from '/rabbit.svg'
import perfume from '/perfume.svg'
import wallet from '/wallet.svg'
import gender from '/gender.svg'


const Home = () => {
  const [toggle, setToggle] = useState(false)
  const slideImage = [image1, image2, image3];
  const newArrivalData = [
    {
      id: 1,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/600x800_1.jpg?v=1715840606&width=300",
      title: "EAU DE PARFUM - 100ML",
      name: "Tiger",
      rating: 4.5,
      price: 1799.00,
      strikedPrice: 1999.00,
      review: 2,
      badge1: "NEW",
      badge2: "BOGO NOT APPLICABLE"

    },
    {
      id: 2,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_6e3f38b1-e520-4d5a-8910-8a2bdb1ee46a.jpg?v=1715953214&width=300",
      title: "EAU DE PARFUM FOR WOMEN",
      name: "SWAG Bomb Girl - 100ml",
      rating: 5.0,
      price: 399.00,
      strikedPrice: 499.00,
      review: 2,
      badge1: "BOGO NOT APPLICABLE",
      badge2: "NEW"
    },
    {
      id: 3,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/DeoParfumTravelSizeGiftSet-00.jpg?v=1711432549&width=300",
      title: "SET OF 4 BODY DEOS FOR ALL",
      name: "Deo Parfum Travel-Size Gift Set",
      rating: 4.4,
      price: 499.00,
      strikedPrice: 590.00,
      review: 76,
      badge1: "NEW",
      badge2: "BOGO NOT APPLICABLE"
    },
    {
      id: 4,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/Taaj-00.jpg?v=1712321132&width=300",
      title: "ATTAR FOR ALL",
      name: "TAAJ Gold OUD Attar - 12ml",
      rating: 4.7,
      price: 599.00,
      strikedPrice: "",
      review: 44,
      badge1: "NEW",
      badge2: ""
    },
  ];

  const bestSellerData = [
    {
      id: 1,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_fdeaa10e-361a-4179-9bd4-475bf0147680.jpg?v=1714465104&width=300",
      title: "EAU DE PARFUM",
      name: "Luxury Perfume Gift Set For Men - 4 x 20mls",
      rating: 4.4,
      price: 849.00,
      strikedPrice: "",
      review: 256,
      badge1: "BUY 1 GET 1 FREE",
      badge2: "BESTSELLER"

    },
    {
      id: 2,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/0_6326984c-e89a-43ba-b560-e35d40faba70.jpg?v=1703835295&width=300",
      title: "PERFUME MINIS FOR ALL (SET OF 4)",
      name: "Luxury OUD Experience Set",
      rating: 4.9,
      price: 1099.00,
      strikedPrice: "",
      review: 39,
      badge1: "BUY 1 GET 1 FREE",
      badge2: "BESTSELLER"
    },
    {
      id: 3,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/1_f3651453-9ace-4b6e-b0ac-4ee2b9e5e7cd.jpg?v=1714548565&width=300",
      title: "EAU DE PARFUM",
      name: "CEO Man Luxury Perfume - 100ml",
      rating: 4.8,
      price: 899.00,
      strikedPrice: "",
      review: 137,
      badge1: "BUY 1 GET 1 FREE",
      badge2: "BESTSELLER"
    },
    {
      id: 4,
      imageUrl: "https://bellavitaorganic.com/cdn/shop/files/2_fb5c7b22-2269-4b0e-9e80-0ca465467a86.jpg?v=1716100625&width=300",
      title: "EAU DE PARFUM",
      name: "Luxury Perfume Gift Set For Women - 4 x 20mls",
      rating: 4.9,
      price: 849.00,
      strikedPrice: "",
      review: 138,
      badge1: "BUY 1 GET 1 FREE",
      badge2: "BESTSELLER"
    },
  ];

  return (
    <>
      <Confetti recycle={false} numberOfPieces={900} width={1500} height={4000} />
      <Box >
        <Slide duration={2500} transitionDuration={500} indicators={true} arrows={false}>
          {slideImage.map((image, index) => <Image h="70vh" w="100%" key={index} src={image} />)}
        </Slide>
      </Box>
      <Box>
        <Image src="../../public/birthdayBanner1.jpg" />
      </Box>
      <HStack my={6} justify="center" align="center">
        <Button onClick={() => setToggle(!toggle)} color={toggle ? "gray.300" : "black"} fontSize="25px" bg="transparent" _hover={{ bg: "transparent" }}>BESTSELLERS</Button>
        <Heading color="gray.300" fontWeight="400">|</Heading>
        <Button onClick={() => setToggle(!toggle)} color={toggle ? "black" : "gray.300"} fontSize="25px" bg="transparent" _hover={{ bg: "transparent" }}>NEW ARRIVALS</Button>
      </HStack>

      <Container maxW="80%">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {
            toggle ?
              newArrivalData.map((product) => <CustomCard key={product.id} {...product} />)
              :
              bestSellerData.map((product) => <CustomCard key={product.id} {...product} />)
          }
        </SimpleGrid>
      </Container>

      <Stack justify="center" align="center" my="20px">
        <Button _hover={{ bg: "black", color: "white" }} borderRadius="none" border="1px" px={20} py={6} variant="outline">VIEW ALL</Button>
      </Stack>
      <Box my="80px">
        <Image src="https://bellavitaorganic.com/cdn/shop/files/Offer-Banner-2_0c5e6f28-423b-4dda-88be-6df859e2ccf6.jpg?v=1714633510&width=1920" />
      </Box>

      <Container maxW="80%">
        <Box textAlign="center">
          <Heading>LUXURY CATEGORIES</Heading>
          <HStack my={8}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={6}>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/Group_364.png?v=1716894864&width=300' />
                <Text>LUXURY PERFUMES</Text>
              </Box>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/Group_366_1.png?v=1716921196&width=300' />
                <Text>BODY WASHES</Text>
              </Box>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/Group_363.png?v=1716921196&width=300' />
                <Text>BODY LOATIONS</Text>
              </Box>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/Group_365.png?v=1716894947&width=300' />
                <Text>BODY DEOS</Text>
              </Box>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/Group_362.png?v=1716921196&width=300' />
                <Text>GIFT SETS</Text>
              </Box>
            </SimpleGrid>
          </HStack>
        </Box>

        <HStack my={20} align="flex-start" spacing={20}>
          <Box>
            <Image boxSize="600px" src='https://bellavitaorganic.com/cdn/shop/files/Luxe-Perfumes_1_30604851-993d-4964-a86f-d9f6f73de4ec.jpg?v=1714633558&width=750' />
          </Box>
          <CustomCard title="EAU DE PARFUM FOR MEN" imageUrl="https://bellavitaorganic.com/cdn/shop/files/1_882dadd1-43e2-4c85-a8a6-0da791b34d8f.jpg?v=1714548090&width=300" name="BLU Man - 100ml" rating={4.6} review={142} badge1="BUY 1 GET 1 FREE" badge2="BESTSELLER" price={1099.00} strikedPrice="" />
        </HStack>

        <Box textAlign="center">
          <Heading>CRAZY DEALS</Heading>
          <HStack my={8}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/678-548_1_214cd2a4-34fe-4555-84bb-2857bbcde128.jpg?v=1714633588&width=400' />
                <Text>SELF LOVE KIT</Text>
              </Box>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/678-548_f5175d6d-c4ef-4955-9e1b-1077d2c6fa95.jpg?v=1715240811&width=400' />
                <Text>HELLO SUMMER COMBO</Text>
              </Box>
              <Box>
                <Image src='https://bellavitaorganic.com/cdn/shop/files/678-548_1_65cd0c63-30d1-47aa-b005-e253057cab14.jpg?v=1714633614&width=400' />
                <Text>BADE MIYA CHHOTE MIYS</Text>
              </Box>
            </SimpleGrid>
          </HStack>
        </Box>
      </Container>
      {/* <Box height="400px">
      <iframe autoPlay={1} muted={1} loop={1} src='https://cdn.shopify.com/videos/c/o/v/478dfd30e1114a6a9fe7a4c4d1b1ffa4.mp4'/>
      </Box> */}
      <Box position="relative">
        <Box my={10} width="100%" height="500px" overflow="hidden">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/478dfd30e1114a6a9fe7a4c4d1b1ffa4.mp4"
            autoPlay
            muted
            loop
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          ></video>
        </Box>
        <Box textAlign="center" color="white" width="40%" position="absolute" top="20%" left="30%">
          <Text fontSize="5xl">DISCOVER THE ART OF PERFUMERY</Text>
          <Text fontSize="lg" margin="20px auto" width="70%">Our formulations have proven efficacy, contain certified ingredients only and are 100% cruelty free</Text>
          <Button letterSpacing={2} fontSize="12px" borderRadius="0" py={6} px={16}>FRAGRANCES</Button>
        </Box>
      </Box>

      <Container maxW="80%">
        <Heading size="md" textAlign="center" my={10}>WHY BELLAVITA?</Heading>
        <HStack textAlign='center' spacing={10}>
        <Box>
          <Image margin="auto" boxSize={20} src={rabbit}/>
          <Text my="10px" fontSize="lg">CRUELTY FREE</Text>
          <Text color="gray.500">Kindness in every bottle: Our commitment to cruelty-free Products.</Text>
        </Box>
        <Box>
          <Image margin="auto" boxSize={20} src={perfume}/>
          <Text my="10px" fontSize="lg">CRUELTY FREE</Text>
          <Text color="gray.500">Kindness in every bottle: Our commitment to cruelty-free Products.</Text>
        </Box>
        <Box>
          <Image margin="auto" boxSize={20} src={wallet}/>
          <Text my="10px" fontSize="lg">CRUELTY FREE</Text>
          <Text color="gray.500">Kindness in every bottle: Our commitment to cruelty-free Products.</Text>
        </Box>
        <Box>
          <Image margin="auto" boxSize={20} src={gender}/>
          <Text  my="10px" fontSize="lg">CRUELTY FREE</Text>
          <Text color="gray.500">Kindness in every bottle: Our commitment to cruelty-free Products.</Text>
        </Box>
        </HStack>
      </Container>
      <Box my={20}>
        <Image src='https://bellavitaorganic.com/cdn/shop/files/download-the-app-banner-desktop.jpg?v=1715262335&width=1920'/>
      </Box>
    </>
  )
}

export default Home
