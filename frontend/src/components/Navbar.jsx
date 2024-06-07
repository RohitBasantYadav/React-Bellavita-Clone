import { SearchIcon } from '@chakra-ui/icons'
import { GoPerson } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { Icon, Box, HStack, Input, InputGroup, InputLeftElement, Image, Flex, Divider, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link as ChakraLink} from '@chakra-ui/react'
import { NavLink as ReactRouterLink, useNavigate } from 'react-router-dom'
import Banner from './Banner';
import "../style/Navbar.css"



const Navbar = () => {
    const navigate = useNavigate()

    function navigateToHomePage(){
        navigate('/')
    }

    return (
        <>
        <Banner/>
        <Box zIndex={10} position="sticky" top="0" borderBottom="1px" borderColor="gray.300" bg="white">
            <Box m="auto" w="70%">
            <HStack justify="space-between">
                <Box >
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon />
                        </InputLeftElement>
                        <Input focusBorderColor='black' borderColor="black" color='black' variant="flushed" type='tel' placeholder='Search' _placeholder={{color:"black"}}/>
                    </InputGroup>
                </Box>
                <Box>
                    <Image _hover={{cursor:"pointer"}} onClick={navigateToHomePage} w="150px" src='https://bellavitaorganic.com/cdn/shop/files/Bella_Vita_Logo_360_E_2x_d60de42b-fa50-45b3-b490-be70ac1fffa1.png?height=30&v=1716533001'/>
                </Box>
                <HStack spacing={10}>
                <IconButton variant='unstyled' fontSize="25px" icon={<GoPerson/>} />
                <IconButton variant="unstyled" fontSize="25px" icon={<BsHandbag/>}/>
                </HStack>
            </HStack>
            <HStack fontSize="13px" justify="center" spacing={10}  align="center" marginY="10px">
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
        </>
    )
}

export default Navbar
