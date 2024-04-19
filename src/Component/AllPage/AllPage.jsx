import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Shoes from '../Shoes/Shoes';
import Backpack from '../Backpack/Backpack';
import Subscribe from '../Subscribe/Subscribe';
import Tshirt from '../Tshirt/Tshirt';

const AllPage = () => {
    return (
        <div>
            <Banner />
            <Catagory />
            <Shoes />
            <Backpack />
            <Tshirt />
            <Subscribe />
        </div>
    );
};

export default AllPage;