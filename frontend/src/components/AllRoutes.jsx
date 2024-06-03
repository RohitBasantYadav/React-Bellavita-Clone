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

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crazydeals' element={<CrazyDeals/>}/>
        <Route path='/bathandbody' element={<BathAndBody/>}/>
        <Route path='/bestseller' element={<Bestsellers/>}/>
        <Route path='/gifting' element={<Gifting/>}/>
        <Route path='/newarrivals' element={<NewArrivals/>}/>
        <Route path='/perfumes' element={<Perfumes/>}/>
        <Route path='/shopall' element={<ShopAll/>}/>
        <Route path='/skincare' element={<SkinCare/>}/>
    </Routes>
  )
}

export default AllRoutes
