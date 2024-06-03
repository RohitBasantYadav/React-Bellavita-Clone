import { Box, Text, Flex, Image, Heading, OrderedList, ListItem, Stack } from '@chakra-ui/react';
import Marquee from "react-fast-marquee";


const BirthDayPoster = ({ pageName }) => {

    return (
        <>
            <Flex cursor="pointer" h="60px" align="center" justify="space-between" bg='#f4e27c' w='100%' p={1.5} >
                <Marquee autoFill speed={80} pauseOnHover>
                    <Box marginRight="60px">
                        <Text>🎁 FREE GIFT ON PREPAID ORDERS 🛍️</Text>
                    </Box>
                    <Box marginRight="60px">
                        <Text>🏷️ BIRTHDAY SALE IS LIVE 🎉</Text>
                    </Box>
                    <Box marginRight="60px">
                        <Text>🤩 BUY 1 GET 1 FREE SITEWIDE* 🚀</Text>
                    </Box>
                </Marquee>
            </Flex>
            <Box>
                <Image src="../../public/bellavitaBirthdayposter.jpg" />
            </Box>
            <Stack marginY="20px" justify="center" align="center">
                <Heading fontWeight="400" size="lg">{pageName}</Heading>
                <OrderedList fontSize="13px">
                    <ListItem marginLeft="20px">Add minimum 2 Eligible Products to your cart</ListItem>
                    <ListItem>BOGO Offer will be automatically applied at checkout</ListItem>
                    <ListItem marginLeft="35px">Same/Low priced product will be FREE</ListItem>
                </OrderedList>
            </Stack>

        </>
    )
};

export default BirthDayPoster;
