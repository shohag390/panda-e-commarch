import React, { useEffect, useState } from 'react';

const Backpack = () => {
    const [item, setItem] = useState([]);
    console.log(item);
    useEffect(() => {
        fetch('https://panda-backend-c9y1.onrender.com/product')
            .then((res) => res.json())
            .then((data) => setItem(data))
    }, [])
    const showsSelect = item.slice(0, 3);
    return (
        <div className='px-[80px] w-[100%] pb-[20px] pt-[20px]'>
            <h4 className='text-3xl font-bold pb-[10px]'>Backpack</h4>
            <div className='flex items-center gap-[20px]'>
                {showsSelect?.map((item) => (
                    <div key={item?.id} className='card w-[100%] flex py-[20px] px-[20px] rounded-md flex-col justify-center'>
                        <img className='h-[300px]' src={item?.url} alt="" />
                        <div>
                            <h4 className='text-xl font-bold pt-[20px] pb-[10px]'>{item?.name}</h4>
                            <p className='text-gray-600 pb-[20px]'>{item?.discription}</p>
                            <button className='btn '>More Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Backpack;