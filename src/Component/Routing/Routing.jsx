import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPage from '../AllPage/AllPage';
import Navbar from '../Sheard/Navbar/Navbar';
import Footer from '../Sheard/Footer/Footer';
import Shoes from '../Shoes/Shoes';
import Backpack from '../Backpack/Backpack';
import Tshirt from '../Tshirt/Tshirt';

const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<AllPage />} />
                <Route path='home' element={<AllPage />} />
                <Route path='shoes' element={<Shoes />} />
                <Route path='bag' element={<Backpack />} />
                <Route path='tshirt' element={<Tshirt />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Routing;