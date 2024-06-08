import React, { useContext } from 'react'
import { Badge, Button, Card, CardBody, CardFooter, Container, HStack, Icon, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { MdVerified } from "react-icons/md";
import axios from 'axios';
import { CartContext } from '../context-Api/CartContext';
const CustomCard = ({id,title,imageUrl,name,rating,review,badge1,badge2,price,strikedPrice}) => {
    const {cartSize, setCartSize} = useContext(CartContext)


    async function addToCart(id){
      try {
        let res = await axios.post(`https://galvanized-wild-look.glitch.me/cart`,{
            title:title,
            imageUrl:imageUrl,
            name:name,
            rating:rating,
            review:review,
            badge1:badge1,
            badge2:badge2,
            price:price,
            strikedPrice:strikedPrice
        })
        console.log(res);
        if(res.status === 201){
            // alert("Item added to cart")
            setCartSize(cartSize+1)
        }
      } catch (error) {
        console.log(error)
      }
    }

    return (
        // <Container border="1px" maxW="80%">
        //     <SimpleGrid columns={{base:1,md:2,lg:4}} spacing={6}>
                <Card position="relative" variant="unstyled" size='sm'>
                    <CardBody>
                        <Badge borderRadius="0" py={1} px={4} ml="6px" mt="6px" fontWeight="400" fontSize="10px" position="absolute" variant='solid' color="white" bg={(badge1 == "BUY 1 GET 1 FREE") || (badge2 == "BUY 1 GET 1 FREE") ? "purple" : "brown"}>
                            {badge1}
                        </Badge>
                        <Badge borderRadius="0" py={1} px={4} ml="6px"  fontWeight="400" fontSize="10px" position="absolute" top="9" variant='solid' color="white" bg="orange.300">
                            {badge2}
                        </Badge>
                        <Image
                            boxSize={80}
                            src={imageUrl}
                            alt='perfume Image'
                        />
                        <Stack mt='2' spacing={2}>
                            <Text textOverflow="ellipsis" color="gray.400" fontSize="12">{title}</Text>
                            <Text noOfLines={1} fontSize="18px">{name}</Text>
                            <HStack justify="start" align="center">
                                <StarIcon color="yellow.600" />
                                <Text fontSize="12px">{rating}</Text>
                                <Text> | </Text>
                                <Icon as={MdVerified} color="blue.600" />
                                <Text fontSize="12px">{`(${review} Reviews)`}</Text>
                            </HStack>
                            <HStack>
                                <Text fontSize='18px'>₹{price}</Text>
                                <Text color="gray.600" as="del" fontSize='18px'>₹{strikedPrice}</Text>
                            </HStack>

                        </Stack>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={()=>addToCart(id,title,imageUrl,name,rating,review,badge1,badge2,price,strikedPrice)} _hover={{bg:"black"}} variant='solid' w="100%" borderRadius="0px" bg="black" color="white">
                            ADD TO CART
                        </Button>
                    </CardFooter>
                </Card>
        //     </SimpleGrid>
        // </Container>
    )
}

export default CustomCard
// transition="transform 500ms" _hover={{transform:"scale(1.02)"}} 
