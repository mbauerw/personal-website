import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Music from './pages/Music';
import Contact from './pages/Contact';
import Layout from './Layout';
import GdpPop from './pages/GdpPop';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';


function App() {


  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gdp" element={<GdpPop />} />
          <Route path="/music" element={<Music />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
