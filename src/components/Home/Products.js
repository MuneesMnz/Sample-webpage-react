import React from 'react';

import '../Home/home.css'


export const Products = ({data}) => {
    
    return (
        <div className='product-container'>
            <img src={require(`../../Assets/${data.img}`)} width='250px' height='300px' />
            <div className='product-detailes'>
                <p>content :{data.name}</p>
                <p>offer : {data.offer} </p>
            </div>
            <button className='product-btn'>View More</button>
        </div>
    )
}
