import React from 'react';
import BannerOne from '../../assets/Image/bannerOne.png';
import BannerTwo from '../../assets/Image/bannerTwo.png';
import { MdDoubleArrow } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='md:px-[80px]'>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='h-[80vh] w-[100%]  bannerBody flex justify-center items-center cursor-pointer'>
                    <div className='flex w-[100%] items-center justify-between px-[80px]'>
                        <div className='w-[50%]'>
                            <h1 className='text-4xl font-bold pb-[10px]'>Yellow Airmax Shoes</h1>
                            <p className='text-gray-600 pb-[8px]'>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <h1 className='text-4xl font-bold text-[#FFB02A] pb-[15px]'>$10</h1>
                            <button className='flex items-center btn gap-[5px]'>
                                <span> Buy Now</span>
                                <MdDoubleArrow />
                            </button>
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <img className='h-[50vh]' src={BannerOne} alt="Image" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-[80vh] w-[100%] bannerBody flex justify-center items-center cursor-pointer'>
                    <div className='flex w-[100%] items-center justify-between px-[80px]'>
                        <div className='w-[50%]'>
                            <h1 className='text-4xl font-bold pb-[10px]'>Red Laltu Bag</h1>
                            <p className='text-gray-600 pb-[8px]'>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                            </p>
                            <h1 className='text-4xl font-bold text-[#FFB02A] pb-[15px]'>$18</h1>
                            <button className='flex items-center btn gap-[5px]'>
                                <span> Buy Now</span>
                                <MdDoubleArrow />
                            </button>
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <img className='h-[60vh]' src={BannerTwo} alt="Image" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;