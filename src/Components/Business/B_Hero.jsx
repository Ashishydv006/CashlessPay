import React from 'react'
import '../../Css/Business/B_Hero.css'


const B_Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='main-hero'>
              <div className='top-box'>
               <div className='main-handing'>
               <h1>Accept instant transfers</h1>
               <h1>from your global customers</h1>
               </div>
                <div className='second-handing'>
                <p>Simplify your payment process with Blaze and save on fees. Great for travel agencies, </p>
                <p>local businesses, e-commerce, subscription services, marketplaces, and man more.</p>
                </div>
              <button>CONTACT US TO GET STARTED</button>
              </div>
            <div className='bg'>
            <div className='image'>
                <img src="https://blaze.money/images/business/blaze-payments-business.png" alt="" />
                <div className='img-handing'>
                  <h1>Manage your business finances</h1>
                  <p>with Cashlesspay Dashboard</p>
                </div>
               </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default B_Hero