import React,{ useEffect, useState } from 'react'   
import Test from './Test';
import {MdSunny} from 'react-icons/md'
import { BrowserRouter as Router, Routes, Route,  RouterProvider,createBrowserRouter, useParams } from 'react-router-dom'; 
import LogoText from './images/svgs/LogoText';
import LogoBlocks from './images/svgs/LogoBlocks';
import NavigationNotLogged from './components/Navbar/NavigationNotLogged';
import Home from './pages/home/Home';
function App() { 
  
  const Pages=()=>{
    return(
      <Routes>
        <Route path="/"  exact={true} element={<Home />} /> 
        <Route path="/home"  element={<Home />} /> 
        <Route path="/about" element={  'about'} /> 
        <Route path="/docs" element={  'docs'} /> 
        <Route path="/services" element={  'services'} /> 
        <Route path="/login" element={  'login'} /> 
        <Route path="/signup" element={  'signup'} /> 
        <Route path="/impressum" element={  'impressum'} /> 
        <Route path="/privacypolicy" element={  'pp'} /> 
        <Route path="/legal" element={  'legaladvice'} /> 
        <Route path="/contact" element={  'contact'} /> 
        <Route path="/press" element={  'press'} /> 
        <Route path="/faq" element={  'faq'} /> 
      </Routes>
    )
  }


  return (
    <div className='w-full flex flex-col items-center justify-start min-h-screen dark:bg-dark-background bg-light-background-color'>
      
      <NavigationNotLogged />
    <Router basename='/'>   
    <Pages />
    </Router> 
    </div> 
  )
}

export default App
