import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CrazyDeals from '../pages/CrazyDeals'
import BathAndBody from '../pages/BathAndBody'
import Bestsellers from '../pages/Bestsellers'
import Gifting from '../pages/Gifting'
import NewArrivals from '../pages/NewArrivals'
import Perfumes from '../pages/Perfumes'
import ShopAll from '../pages/ShopAll'
import SkinCare from '../pages/SkinCare'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivateRoutes from './PrivateRoutes'
import SignUp from '../pages/SignUp'
import Checkout from '../pages/Checkout'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crazydeals' element={<CrazyDeals/>}/>
        <Route path='/bathandbody' element={<PrivateRoutes><BathAndBody/></PrivateRoutes>}/>
        <Route path='/bestseller' element={<PrivateRoutes><Bestsellers/></PrivateRoutes>}/>
        <Route path='/gifting' element={<PrivateRoutes><Gifting/></PrivateRoutes>}/>
        <Route path='/newarrivals' element={<PrivateRoutes><NewArrivals/></PrivateRoutes>}/>
        <Route path='/perfumes' element={<PrivateRoutes><Perfumes/></PrivateRoutes>}/>
        <Route path='/shopall' element={<PrivateRoutes><ShopAll/></PrivateRoutes>}/>
        <Route path='/skincare' element={<PrivateRoutes><SkinCare/></PrivateRoutes>}/>
        <Route path='/checkout' element={<PrivateRoutes><Checkout/></PrivateRoutes>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default AllRoutes
