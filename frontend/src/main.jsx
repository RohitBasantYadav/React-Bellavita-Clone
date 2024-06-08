import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context-Api/CartContext.jsx'
import { AuthContextProvider } from './context-Api/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthContextProvider>
    <CartContextProvider>
    <ChakraProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>
    </CartContextProvider>
    </AuthContextProvider>
)
