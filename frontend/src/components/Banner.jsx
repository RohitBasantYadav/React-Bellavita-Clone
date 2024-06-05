import React, { useEffect, useState } from 'react'
import { Box, Container, HStack, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
import '../style/Banner.css'
const Banner = () => {
  const [count, setCount] = useState(0);
  const textArr = ["🎁 Free Gift on all PREPAID Orders", "Get any 3 100ml PERFUMES for just ₹1298", "Bellavita's Birthday is Here! Buy 1 Get 1 FREE SITEWIDE*", "Get any 2 100ml PERFUMES for just ₹949"];

  useEffect(() => {
    let id = setInterval(() => {
      if (count < textArr.length - 1) {
        setCount(count + 1)
      }
      else {
        setCount(0)
      }
    }, 4000)

    return () => {
      clearInterval(id)
    }
  },[count])
  function handleIncrement() {
    if (count < textArr.length - 1) {
      setCount(count + 1)
    }
    else {
      setCount(0)
    }

  }

  function handleDecrement() {
    if (count == 0) {
      setCount(textArr.length - 1)
    }
    else {
      setCount(count - 1)
    }

  }
  return (
    <Box bg='black' w='100%' p={1.5} color='white'>
      <Container maxW="container.xl">
        <HStack fontSize="16px" justify="space-between">
          <IconButton  onClick={handleDecrement} fontSize="20px" variant="gosht" icon={<IoIosArrowBack />} />
          <Text>{textArr[count]}</Text>
          <IconButton onClick={handleIncrement} fontSize="20px" variant="gosht" icon={<IoIosArrowForward />} />
        </HStack>
      </Container>
    </Box>
  )
}

export default Banner
