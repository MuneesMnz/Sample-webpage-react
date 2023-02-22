import React from 'react'
import '../Home/home.css'
import { Products } from './Products'


const  data=[{
    img:"bags.jpg",
    name:"Bags",
    offer : " upto 50%"
},
{
    img:"cloths.webp",
    name:"Cloths",
    offer : "upto 30%"
},
{
    img:"headset.jpg",
    name:"Headset",
    offer : "Upto 30%"
},
{
    img:"shoe.jpg",
    name:"Shoe",
    offer : "upto 50%"
}
]

export const Home = () => {
  
    return (
        <div className='body'>
            <div className='head-content'>
                <div className='content-left'>
                    <h2 className='content-heading'>Heading</h2>
                    <div className='content-letters'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sapien turpis.
                        Duis id tempor mauris. Vestibulum hendrerit interdum arcu vel euismod. Ut non scelerisque lectus.


                    </div>
                </div>
                <div className='content-right'>

                </div>
            </div>

            <div className='products'>
                {data.map(value=>{
                    return <Products data={value} />
                })}
                
            </div>
        </div>
    )
}
