import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Travaux from './pages/Travaux.jsx';
import Fiche from './pages/Fiche.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/travaux" element={<Travaux />} />
                <Route path='/fiche/:id' element={<Fiche />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);