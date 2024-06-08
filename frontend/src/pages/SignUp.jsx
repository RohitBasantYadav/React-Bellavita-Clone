import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react'
import axios from 'axios';

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    // const { login } = useContext(AuthContext);
    const [signupDetails, setSignupDetails] = useState({
        username:"",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    // Using useRef for to focus on Input box
    const inputRef = useRef(null);
    useEffect(() => {
        window.onload = (e) => (inputRef.current.focus())
    }, [])

    // HandleChange function is Here
    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setSignupDetails({ ...signupDetails, [name]: value })
    }

    // Post Request for Login
    async function postLoginDetails() {
        try {
            let res = await axios.post(`https://galvanized-wild-look.glitch.me/signupDetails`, signupDetails);
            console.log(res)
            if(res.status==201){
                alert("Account Created Successfully");
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Container borderRadius="lg" my={10} p={10} border="1px" maxW="30%">
            <Heading size="md" mb={10} textAlign="center">SIGNUP PAGE</Heading>
            <VStack spacing={10}>
                <Input focusBorderColor='black' name="username" value={signupDetails.username} onChange={handleChange} ref={inputRef} variant='flushed' placeholder='Enter Username' />
                <Input focusBorderColor='black' name="email" value={signupDetails.email} onChange={handleChange} variant='flushed' placeholder='Enter Email' />
                <Input
                focusBorderColor='black'
                    name="password"
                    value={signupDetails.password}
                    onChange={handleChange}
                    variant='flushed'
                    placeholder='Enter password'
                />


                <Button onClick={postLoginDetails} color="white" _hover={{ bg: "blackAlpha.900" }} bg='blackAlpha.900' borderRadius="none" variant='solid' w="100%">SIGNUP</Button>
                <Button onClick={() => navigate('/login')} fontSize="14px" color="black" variant="link">Already have an Account? Login</Button>
            </VStack>
        </Container>
    )
}

export default SignUp
