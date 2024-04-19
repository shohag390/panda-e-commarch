import React from 'react';
import Bag from '../../assets/Image/bag.png';
import Shoes from '../../assets/Image/shoes.png';
import Tshirt from '../../assets/Image/t-shirt.png';
import { Link } from 'react-router-dom';

const Catagory = () => {
    return (
        <div className='h-[200px] w-[100%] flex justify-between items-center px-[80px] gap-[20px] pt-[20px]'>
            <Link to={"bag"} className='flex w-[100%] items-center justify-between bg-[#FF3F8B] cursor-pointer px-[30px] py-[10px]'>
                <h4 className='text-3xl font-bold text-white'>Bag</h4>
                <img className='h-[100px]' src={Bag} alt="Image" />
            </Link>
            <Link to={"shoes"} className='flex w-[100%] items-center justify-between bg-[#FFB02A] cursor-pointer px-[30px] py-[10px]'>
                <h4 className='text-3xl font-bold text-white'>Shoes</h4>
                <img className='h-[100px]' src={Shoes} alt="Image" />
            </Link>
            <Link to={"tshirt"} className='flex w-[100%] items-center justify-between bg-[#FF3F8B] cursor-pointer px-[30px] py-[10px]'>
                <h4 className='text-3xl font-bold text-white'>T-Shirt</h4>
                <img className='h-[100px]' src={Tshirt} alt="Image" />
            </Link>
        </div>
    );
};

export default Catagory;