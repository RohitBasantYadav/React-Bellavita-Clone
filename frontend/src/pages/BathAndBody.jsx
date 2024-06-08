import { Button, Box, Text, Container, HStack, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BirthDayPoster from '../components/BirthDayPoster'
import axios from "axios"
import CustomCard from '../components/CustomCard'
import { ChevronDownIcon } from '@chakra-ui/icons'
const BathAndBody = () => {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [sortingValue,setSortingValue] = useState("");
  const [filterValue, setFilterValue] = useState("")

  useEffect(() => {
    getData(sortingValue,filterValue)
  }, [sortingValue,filterValue])

  async function getData(sortingValue,filterValue) {
    try {
      const queryParams={};

      if (filterValue) {
        queryParams.title = filterValue
      }
      if (sortingValue) {
        queryParams._sort = "price";
        queryParams._order = sortingValue;
      }
      let res = await axios.get("https://galvanized-wild-look.glitch.me/bathAndBody", {
        params: queryParams
      })
      setData(res.data)
      setDataLength(res.data.length)
    } catch (error) {
      console.log(error)
    }
  }

  //Sorting Functionality:
  function handleSorting(e) {
    setSortingValue(e)
  }

  //Filtering functionality
  function handleFiltering(e) {
    setFilterValue(e)
  }
  return (
    <>
    <BirthDayPoster pageName="- Bath And Body -"/>      
    <Container my={20} maxW="80%">
        <HStack justify="space-between" my={10}>
          <Box w="50%">
            {/* This is for Filtering */}
            <Menu matchWidth gutter={0}>
              <MenuButton margin={0} as={Button} textAlign="left" rightIcon={<ChevronDownIcon />} variant="solid" w="20%" borderRadius="none" fontSize="14px" bg="black" color="white">
                FILTER
              </MenuButton>
              <MenuList borderRadius="0px">
                <MenuOptionGroup onChange={handleFiltering} title='Order' type='radio'>
                  <MenuItemOption value='EAU DE PARFUM'>EAU DE PARFUM</MenuItemOption>
                  <MenuItemOption value='PARFUM'>PARFUM</MenuItemOption>
                  <MenuItemOption value='EAU DE COLOGNE'>EAU DE COLOGNE</MenuItemOption>
                  <MenuItemOption value='EAU DE PARFUM FOR ALL'>EAU DE PARFUM FOR ALL</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>

            {/* This is for Sorting */}
            <Menu matchWidth gutter={0}>
              <MenuButton margin={0} as={Button} textAlign="left" rightIcon={<ChevronDownIcon />} variant="outline" w="30%" borderRadius="none" fontSize="14px" colorScheme='whiteAlpha' color="black" >
                SORT BY
              </MenuButton>
              <MenuList borderRadius="0px">
                <MenuOptionGroup onChange={handleSorting} title='Order' type='radio'>
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

export default BathAndBody
