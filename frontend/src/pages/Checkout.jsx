import React, { useEffect } from 'react'
import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, cartTotal, setCartItems, setCartTotal } = location.state || { cartItems: [], cartTotal: 0 };
    
    function handleOrder(){
        
        alert("Hurray! Order Placed....");
        navigate('/')
    }

    return (
        <>
            <Container maxW="container.lg" p={4}>
                <Heading as="h1" mb={6} textAlign="center">Checkout</Heading>

                <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
                    {/* User Details Section */}
                    <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="md" mb={4}>User Details</Heading>
                        <VStack spacing={4}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="address" isRequired>
                                <FormLabel>Address</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="city" isRequired>
                                <FormLabel>City</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="postalCode" isRequired>
                                <FormLabel>Postal Code</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </VStack>
                    </Box>

                    {/* Order Summary Section */}
                    <Box flex="1" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
                        <Heading as="h2" size="md" mb={4}>Order Summary</Heading>
                        <VStack spacing={4} align="stretch">
                            {cartItems.map((item, index) => (
                                <HStack key={index} justifyContent="space-between">
                                    <Text>{item.name}</Text>
                                    <Text>₹{item.price}</Text>
                                </HStack>
                            ))}
                            <Divider />
                            <HStack justifyContent="space-between">
                                <Text fontWeight="bold">Total</Text>
                                <Text fontWeight="bold">₹{cartTotal}</Text>
                            </HStack>
                        </VStack>
                    </Box>
                </Stack>

                {/* Payment Section */}
                <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" mt={8}>
                    <Heading as="h2" size="md" mb={4}>Payment Information</Heading>
                    <VStack spacing={4}>
                        <FormControl id="cardNumber" isRequired>
                            <FormLabel>Card Number</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <HStack spacing={4}>
                            <FormControl id="expiryDate" isRequired>
                                <FormLabel>Expiry Date</FormLabel>
                                <Input type="text" placeholder="MM/YY" />
                            </FormControl>
                            <FormControl id="cvv" isRequired>
                                <FormLabel>CVV</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </HStack>
                    </VStack>
                </Box>

                {/* Submit Button */}
                <Button onClick={handleOrder} color="white" bg="black"  _hover={{bg:"black"}} size="lg" mt={8} w="full">
                    Place Order
                </Button>
            </Container>

        </>
    )
}

export default Checkout
