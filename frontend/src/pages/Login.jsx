import { Container, Heading, VStack, Input, InputGroup, InputRightElement, Button, Alert, AlertIcon } from '@chakra-ui/react'
import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context-Api/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const { login, logout, isLoggedIn } = useContext(AuthContext);
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })
    const [userDetails,setUserDetails] = useState([])
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    // Using useRef for to focus on Input box
    const inputRef = useRef(null);
    useEffect(() => {
        window.onload = (e) => (inputRef.current.focus())
    }, [])

    // HandleChange function is Here
    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setLoginDetails({ ...loginDetails, [name]: value })
    }

    // Post Request for Login
    async function postLoginDetails() {
        try {
            let res = await axios.get(`http://localhost:3000/signupDetails?email=${loginDetails.email}&password=${loginDetails.password}`);
            console.log(res.data)
            setUserDetails(res.data)
            // setData(res.data)
            console.log(Math.floor(Math.random() * 1000000))
            //   console.log(res.data.token, loginDetails.email)
            login(Math.floor(Math.random() * 1000000), loginDetails.email);
            if (res.data.length > 0) {
                alert("Login Successful")
                navigate('/')
            }
            else {
                alert("User Not Registered! Please Register")
            }
        } catch (error) {
            console.log(error)
        }

    }

    // Jsx code is Here

    return (
        <>
            {
                isLoggedIn.isAuthenticated ?
                    <Container borderRadius="lg" my={20} p={10} border="1px" maxW="lg">
                        <Heading>Welcome, User</Heading>
                        <Button onClick={logout}>Logout</Button>
                    {console.log(userDetails) }
                        
                    </Container>

                    :

                    <Container borderRadius="lg" my={20} p={10} border="1px" maxW="30%">
                        <Heading mb={10} textAlign="center">LOGIN PAGE</Heading>
                        <VStack spacing={10}>
                            <Input focusBorderColor='black' name="email" value={loginDetails.email} onChange={handleChange} ref={inputRef} variant='flushed' placeholder='Enter Email' />
                            <InputGroup size='md'>
                                <Input
                                    focusBorderColor='black'
                                    name="password"
                                    value={loginDetails.password}
                                    onChange={handleChange}
                                    variant='flushed'
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button onClick={postLoginDetails} color="white" _hover={{ bg: "blackAlpha.900" }} bg='blackAlpha.900' borderRadius="none" variant='solid' w="100%">LOGIN</Button>
                            <Button onClick={() => navigate('/signup')} fontSize="14px" color="black" variant="link">CREATE NEW ACCOUNT</Button>
                        </VStack>
                    </Container>
            }
        </>
    )
}

export default Login
