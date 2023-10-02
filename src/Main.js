import React from 'react';
import "./Main.css";
import NewArrival from './NewArrival';
import Offer from './Offer';
import BestSeller from './BestSeller';

function Main() {
  return (
    <div>
    <div className='main'>
            <div className='title'>
                <h1>Sort out Your Spring Look</h1>
                <p>We will help to develop every smallest thing into a big one for your company</p>
                <button className='Button'>Shop</button>
            </div>

            <div className='slider'></div>

            {/* <div className='slider'>h</div> */}
    </div>

    <div className='dresses'>
        <div className='collections'></div>
        <div className='collections'></div>
        <div className='collections'></div>
        <div className='collections1'></div>
        <div className='collections1'></div>
        <div className='collections1'></div>
        
    </div>

    <NewArrival/>
    <Offer/>
    <BestSeller/>
    </div>
  )
}

export default Main;