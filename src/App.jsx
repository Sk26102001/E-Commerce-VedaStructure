import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import SearchBar from './components/SearchBar'
import NotFound from './pages/NotFound.jsx'
import BlogPost from './pages/BlogPost'



function App() {
  return (
    <div> 
      {/* <SearchBar/> */}
      <Navbar/>

      <Banner/>
    <Footer/>  
     
   

      
    </div>
  )
}

export default App


