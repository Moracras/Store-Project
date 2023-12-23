import React from 'react'
import  {Routes,Route} from "react-router-dom"
import Login from "../pages/Login"
import Navbar from "../components/Navbar"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import Home from "../pages/Home"
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Login/>} />
        <Route path='/dashboard' element={<PrivateRouter/>} >
          <Route path='' element={<Home/>}/>
          <Route path='/dashboard/products' element={<Products/>}/>
          <Route path='products/:title' element={<ProductDetail/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
        <Route path="" element={<NotFound/>}/>

      </Routes>
    
    </>
  )
}

export default AppRouter