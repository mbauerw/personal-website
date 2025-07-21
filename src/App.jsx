import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Hero from './pages/Hero';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Music from './pages/Music';
import Contact from './pages/Contact';
import ExpandableDiv from './components/ExpandableDiv'
import Body from './components/Body';
import NavBar from './components/NavBar';
import First from './components/First';
import Header from './components/Header';
import Layout from './Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
