import { Button, Box, Text, Container, HStack, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BirthDayPoster from '../components/BirthDayPoster'
import axios from "axios"
import CustomCard from '../components/CustomCard'
import { ChevronDownIcon } from '@chakra-ui/icons'
const Bestsellers = () => {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);


  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    let res = await axios.get("http://localhost:3000/bestSellers")
    setData(res.data)
    setDataLength(res.data.length)
  }

  function handleChange(e) {
    console.log(e)
  }
  return (
    <>
      <BirthDayPoster pageName="Bestsellers" />
      <Container my={20} maxW="80%">
        <HStack justify="space-between" my={10}>
          <Box w="50%">
          {/* This is for Filtering */}
          <Menu matchWidth gutter={0}>
            <MenuButton margin={0} as={Button} textAlign="left" rightIcon={<ChevronDownIcon />} variant="solid" w="20%" borderRadius="none" fontSize="14px" bg="black" color="white">
              FILTER
            </MenuButton>
            <MenuList borderRadius="0px">
              <MenuOptionGroup onChange={handleChange} title='Order' type='radio'>
                <MenuItemOption value='asc'>Price, low to high</MenuItemOption>
                <MenuItemOption value='desc'>Price, high to low</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>

          {/* This is for Sorting */}
          <Menu matchWidth gutter={0}>
            <MenuButton margin={0} as={Button} textAlign="left" rightIcon={<ChevronDownIcon />} variant="outline" w="30%" borderRadius="none" fontSize="14px" colorScheme='whiteAlpha' color="black" >
              SORT BY
            </MenuButton>
            <MenuList borderRadius="0px">
              <MenuOptionGroup onChange={handleChange} title='Order' type='radio'>
                <MenuItemOption value='asc'>Price, low to high</MenuItemOption>
                <MenuItemOption value='desc'>Price, high to low</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          </Box>
          <Text>{dataLength} products</Text>
        </HStack>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={6}>
          {
            data.map((product) => <CustomCard key={product.id} {...product} />)
          }
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Bestsellers
