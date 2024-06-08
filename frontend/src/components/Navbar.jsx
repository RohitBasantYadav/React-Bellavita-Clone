import { SearchIcon } from '@chakra-ui/icons'
import { GoPerson } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Image,
    IconButton,
    useDisclosure,
    Button,
    Text,
    Divider,
    CloseButton,
    ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    
} from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { NavLink as ReactRouterLink, useNavigate } from 'react-router-dom'
import Banner from './Banner';
import axios from 'axios';
import { CartContext } from '../context-Api/CartContext';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { cartSize, setCartSize } = useContext(CartContext)
    const btnRef = useRef();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        fetchCartData();
    }, [cartSize]);

    useEffect(() => {
        calculateTotal();
    }, [cartItems]);

    const fetchCartData = async () => {
        try {
            let res = await axios.get('http://localhost:3000/cart');
            const itemsWithCount = res.data.map(item => ({ ...item, count: 1 }));
            setCartItems(itemsWithCount);
            setCartSize(res.data.length)
        } catch (error) {
            console.log(error);
        }
    };

    async function deleteCartItem(id) {
        try {
            let res = await axios.delete(`http://localhost:3000/cart/${id}`);
            setCartSize(res.data.length)
        } catch (error) {
            console.log(error)
        }
    }

    const handleIncrement = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
    };

    const handleDecrement = (id) => {
        setCartItems(cartItems.map(item => item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item));
    };

    const calculateTotal = () => {
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.count), 0);
        setCartTotal(total);
    };

    const navigateToHomePage = () => {
        navigate('/');
    };

    // This is checkout functionality
    const handleCheckout = () => {
        onClose()
        navigate('/checkout', { state: { cartItems, cartTotal} });
      };
    return (
        <>
            <Banner />
            <Box zIndex={10} position="sticky" top="0" borderBottom="1px" borderColor="gray.300" bg="white">
                <Box m="auto" w="70%">
                    <HStack justify="space-between">
                        <Box >
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <SearchIcon />
                                </InputLeftElement>
                                <Input focusBorderColor='black' borderColor="black" color='black' variant="flushed" type='tel' placeholder='Search' _placeholder={{ color: "black" }} />
                            </InputGroup>
                        </Box>
                        <Box>
                            <Image _hover={{ cursor: "pointer" }} onClick={navigateToHomePage} w="150px" src='https://bellavitaorganic.com/cdn/shop/files/Bella_Vita_Logo_360_E_2x_d60de42b-fa50-45b3-b490-be70ac1fffa1.png?height=30&v=1716533001' />
                        </Box>
                        <HStack spacing={10}>
                            <IconButton onClick={() => navigate("/login")} variant='unstyled' fontSize="25px" icon={<GoPerson />} />
                            <HStack spacing="0px" justify="center" align="flex-start">
                                <IconButton ref={btnRef} onClick={onOpen} variant="unstyled" fontSize="25px" icon={<BsHandbag />} />
                                <Text fontSize="10px" mt="2px" ml="-14px" px="5px" borderRadius="50%" color="white" bg="black">{cartSize === 0 ? "" : cartSize}</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                    <HStack fontSize="13px" justify="center" spacing={10} align="center" marginY="10px">
                        <ChakraLink as={ReactRouterLink} to="/crazydeals">CRAZY DEALS</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/shopall">SHOP ALL</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/bestseller">BESTSELLERS</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/perfumes">PERFUMES</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/bathandbody">BATH & BODY</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/newarrivals">NEW ARRIVALS</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/skincare">SKINCARE</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/gifting">GIFTING</ChakraLink>
                    </HStack>
                </Box>
            </Box>

            {/* This is cart Drawer component */}
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>CART</DrawerHeader>
                    <Divider borderColor="gray.400" />
                    <DrawerBody>
                        {
                            cartItems.map((item) => (
                                <Box key={item.id}>
                                    <HStack spacing={6} align="flex-start" my={6}>
                                        <Box>
                                            <Image boxSize={20} src={item.imageUrl} />
                                        </Box>
                                        <Box w="100%">
                                            <HStack w="100%" justify="space-between" mb={4}>
                                                <Text fontSize="14px" noOfLines={1}>{item.name}</Text>
                                                <CloseButton onClick={() => deleteCartItem(item.id)} borderRadius="50%" _hover={{ bg: "black", color: "white" }} size='sm' fontSize="6px" />
                                            </HStack>
                                            <HStack justify="space-between">
                                                <ButtonGroup size='sm' isAttached variant='outline'>
                                                    <Button onClick={() => handleDecrement(item.id)} isDisabled={item.count === 1}>-</Button>
                                                    <Button _hover={{ bg: "none" }}>{item.count}</Button>
                                                    <Button onClick={() => handleIncrement(item.id)}>+</Button>
                                                </ButtonGroup>
                                                <Text fontWeight="bold">₹{item.price * item.count}</Text>
                                            </HStack>
                                        </Box>
                                    </HStack>
                                    <Divider borderColor="gray.400" />
                                </Box>
                            ))
                        }
                    </DrawerBody>
                    <DrawerFooter>
                        <Button onClick={handleCheckout} borderRadius="none" _hover={{ bg: "black" }} color="white" bg="black" w="100%">
                            CHECKOUT - ₹{cartTotal}.00
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            
        </>
    )
}

export default Navbar
