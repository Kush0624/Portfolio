import React from 'react'
import {BrowserRouter, createBrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  )
}
