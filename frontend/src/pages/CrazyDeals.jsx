import { Button, Text, Card, CardBody, CardFooter, Heading, Image, Stack, Container } from '@chakra-ui/react'
import React from 'react'
import "../style/Animation.css"
const CrazyDeals = () => {
  return (
    <Container  mt="20px" maxW="container.xl">
      <Card
      borderRadius="0px"
      maxW="90%"
        direction={{sm:"column", md:"column", lg:"row"}}
        overflow='hidden'
        variant='unstyled'
        justify="center"
        align="center" 
        gap="90px"
        mt="20px"
      >
        <Image
          
          maxW={{ base: '100%', md:"60%", sm: '200px', lg: "50%" }}
          src='https://bellavitaorganic.com/cdn/shop/files/678-548_94c15aaf-f02a-4040-8e24-0a5ee134f49a.jpg?v=1714632411&width=750'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>WONDER WOMAN COMBO</Heading>

            <Text py='2'>
            Make everyone wonder the secret of your freshness with the Wonder Woman Combo! Select any 2 100 ml perfumes and 1 250 ml Shower Gel to feel fresh and fragrant, all day long and save the day!
            </Text>

          </CardBody>

          <CardFooter paddingTop={0}>
          <Button _hover={{animation:`shine 3s 3s ease-in-out 1`}} borderRadius="0px" paddingX="55px" variant='solid' color='white' bgColor="black">
              BUY NOW
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      <Card
      borderRadius="0px"
      mt="60px"
      maxW="90%"
        direction={{sm:"column", md:"column", lg:"row"}}
        overflow='hidden'
        variant='unstyled'
        justify="center"
        align="center" 
        gap="90px"

      >

        <Stack align="end">
          <CardBody textAlign="right">
            <Heading size='md'>ULTIMATE PERFUME BOX</Heading>

            <Text py='2'>
            A unique box for all. Take advantage of BellaVita’s luxury perfume box by selecting a perfume from any category of perfumes for men, women and unisex fragrances. Enjoy the big savings and a versatile collection suitable for everyone.
            </Text>

          </CardBody>

          <CardFooter paddingTop={0}>
          <Button _hover={{animation:`shine 3s 3s ease-in-out 1`}} borderRadius="0px" paddingX="55px" variant='solid' color='white' bgColor="black">
              BUY NOW
            </Button>
          </CardFooter>
        </Stack>
        <Image
          
          maxW={{ base: '100%', md:"60%", sm: '200px', lg: "50%" }}
          src='https://bellavitaorganic.com/cdn/shop/files/Frame_591.jpg?v=1695733933&width=750'
          alt='Image of Perfumes'
        />
      </Card>

      <Card
      borderRadius="0px"
      maxW="90%"
        direction={{sm:"column", md:"column", lg:"row"}}
        overflow='hidden'
        variant='unstyled'
        justify="center"
        align="center" 
        gap="90px"
        mt="60px"
      >
        <Image
          
          maxW={{ base: '100%', md:"60%", sm: '200px', lg: "50%" }}
          src='https://bellavitaorganic.com/cdn/shop/files/678-548.jpg?v=1697537263&width=750'
          alt='Image of Perfumes'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>SELF LOVE KIT</Heading>

            <Text py='2'>
            Take care of yourself with our Self Love Kit. It has six items to help you relax and feel good. Only ₹999 for everything you need for a relaxing day at home.
            </Text>

          </CardBody>

          <CardFooter paddingTop={0}>
          <Button _hover={{animation:`shine 3s 3s ease-in-out 1`}} borderRadius="0px" paddingX="55px" variant='solid' color='white' bgColor="black">
              BUY NOW
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      
      <Card
      borderRadius="0px"
      mt="60px"
      maxW="90%"
        direction={{sm:"column", md:"column", lg:"row"}}
        overflow='hidden'
        variant='unstyled'
        justify="center"
        align="center" 
        gap="90px"

      >

        <Stack align="end">
          <CardBody textAlign="right">
            <Heading size='md'>HELLO SUMMER COMBO</Heading>

            <Text py='2'>
            It's getting hot and we have a hotter deal for you! Select 1 100ml perfume, 1 500ml Shower Gel and 1 100ml Body Deo of your choice and add it to your cart! Get 3 full-sized products to stay super cool this summer!
            </Text>

          </CardBody>

          <CardFooter paddingTop={0}>
          <Button _hover={{animation:`shine 3s 3s ease-in-out 1`}} borderRadius="0px" paddingX="55px" variant='solid' color='white' bgColor="black">
              BUY NOW
            </Button>
          </CardFooter>
        </Stack>
        <Image
          
          maxW={{ base: '100%', md:"60%", sm: '200px', lg: "50%" }}
          src='https://bellavitaorganic.com/cdn/shop/files/678-548_ca2ae59b-a45c-4768-8e28-fb95ff32103e.jpg?v=1715240804&width=750'
          alt='Image of Perfumes'
        />
      </Card>

      <Card
      borderRadius="0px"
      maxW="90%"
        direction={{sm:"column", md:"column", lg:"row"}}
        overflow='hidden'
        variant='unstyled'
        justify="center"
        align="center" 
        gap="90px"
        mt="60px"
      >
        <Image
          
          maxW={{ base: '100%', md:"60%", sm: '200px', lg: "50%" }}
          src='https://bellavitaorganic.com/cdn/shop/files/678-548_1.jpg?v=1701774461&width=750'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>BADE MIYA CHHOTE MIYA</Heading>

            <Text py='2'>
            Get a full-sized 100ml perfume bottle along with a 20ml perfume of your choice so that your favourite perfumes stay with you. Keep the big bottle at home and the small bottle with you so that you can smell fresh, always.
            </Text>

          </CardBody>

          <CardFooter paddingTop={0}>
          <Button _hover={{animation:`shine 3s 3s ease-in-out 1`}} borderRadius="0px" paddingX="55px" variant='solid' color='white' bgColor="black">
              BUY NOW
            </Button>
          </CardFooter>
        </Stack>
      </Card>

      
      <Card
      borderRadius="0px"
      mt="60px"
      maxW="90%"
        direction={{sm:"column", md:"column", lg:"row"}}
        overflow='hidden'
        variant='unstyled'
        justify="center"
        align="center" 
        gap="90px"

      >

        <Stack align="end">
          <CardBody textAlign="right">
            <Heading size='md'>PERFECT JODI</Heading>

            <Text py='2'>
            If you’re struggling to choose your favourite 100 ml perfume, we’re here to sweeten the deal. Instead of choosing just one, use this crazy deal to bring home 2 of our best-selling 100 ml perfumes.
            </Text>

          </CardBody>

          <CardFooter paddingTop={0}>
          <Button _hover={{animation:`shine 3s 3s ease-in-out 1`}} borderRadius="0px" paddingX="55px" variant='solid' color='white' bgColor="black">
              BUY NOW
            </Button>
          </CardFooter>
        </Stack>
        <Image
          
          maxW={{ base: '100%', md:"60%", sm: '200px', lg: "50%" }}
          src='https://bellavitaorganic.com/cdn/shop/files/678-548_a8cbc2a1-89b6-4f61-ba63-88cdd38c075a.jpg?v=1701774255&width=750'
          alt='Image of Perfumes'
        />
      </Card>

      
      <Card
      borderRadius="0px"
      maxW="90%"
        direction={{sm:"column", md:"column", lg:"row"}}
        overflow='hidden'
        variant='unstyled'
        justify="center"
        align="center" 
        gap="90px"
        mt="60px"
      >
        <Image
          
          maxW={{ base: '100%', md:"60%", sm: '200px', lg: "50%" }}
          src='https://bellavitaorganic.com/cdn/shop/files/678x548.jpg?v=1716293189&width=750'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>SHOWER POWER COMBO</Heading>

            <Text py='2'>
            Here's a triple treat full of fragrant luxury for you! Select any 3 250 ml Shower Gels of your choice and get them only for Rs. 599. Make your showers something to look forward to every single day!
            </Text>

          </CardBody>

          <CardFooter paddingTop={0}>
          <Button _hover={{animation:`shine 3s 3s ease-in-out 1`}} borderRadius="0px" paddingX="55px" variant='solid' color='white' bgColor="black">
              BUY NOW
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  )
}

export default CrazyDeals
