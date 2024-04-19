import React from 'react';
import Logo from '../../../assets/Logo/logo.png';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";


const Footer = () => {
    return (
        <div className='bg-[#FAF9F8] mt-[20px] px-[80px]'>
            <div className='grid grid-cols-4 gap-[100px] w-[100%] py-[30px] border-b-2'>
                <div className='w-[100%]'>
                    <img className='h-[20px] mb-[10px]' src={Logo} alt="Logo" />
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className='w-[100%]'>
                    <h4 className='pb-[10px] font-bold uppercase'>Product</h4>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <Link to={"shoes"}>
                                Shoes
                            </Link>
                        </li>
                        <li>
                            <Link to={"shoes"}>
                                BackPack
                            </Link>
                        </li>
                        <li>
                            <Link to={"shoes"}>
                                T-Shirt
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='w-[100%]'>
                    <h4 className='pb-[10px] font-bold uppercase'>Useful Link</h4>
                    <ul className='flex flex-col gap-2'>
                        <li>
                            <Link to={"shoes"}>
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link to={"shoes"}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to={"shoes"}>
                                Shipping Rates
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='w-[100%]'>
                    <h4 className='pb-[10px] font-bold uppercase'>Contact</h4>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2'>
                            <FaLocationArrow className='text-2xl text-gray-600' />
                            <p>New York, NY 10012,US</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-xl text-gray-600' />
                            <p>+88 01315-390470</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <MdMarkEmailUnread className='text-xl text-gray-600' />
                            <p>mdshohaghossen29@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-center py-[10px] '>
                <p>&copy; 2024. Panda E-commerce. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;