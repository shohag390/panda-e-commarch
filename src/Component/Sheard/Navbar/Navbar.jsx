import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/logo.png';

const Navbar = () => {
    return (
        <nav className='flex items-center gap-[30px] h-[10vh] md:px-[80px] bg-[#FAF9F8] sticky top-0 right-0 left-0 z-50'>
            <Link to={"/"}>
                <img src={Logo} alt="Image" />
            </Link >
            <ul className='flex gap-[30px] items-center'>
                <li>
                    <Link className='text-gray-600 hover:text-[black]' to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className='text-gray-600 hover:text-[black]' to={"shoes"}>Shoes</Link>
                </li>
                <li>
                    <Link className='text-gray-600 hover:text-[black]' to={"bag"}>Backpack</Link>
                </li>
                <li>
                    <Link className='text-gray-600 hover:text-[black]' to={"tshirt"}>T-Shirt</Link>
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;