import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'

 
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
                  </Router>
    </React.StrictMode>
)