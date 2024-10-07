import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Travaux from './pages/Travaux.jsx'
import Fiche from './pages/Fiche.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/travaux" element={<Travaux />} />
                <Route path='/fiche/:id' element={<Fiche />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')

)