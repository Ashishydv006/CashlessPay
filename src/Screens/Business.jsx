import React from 'react'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import B_Hero from '../Components/Business/B_Hero'
import B_SecondSec from '../Components/Business/B_SecondSec'
import Handing from '../Components/Business/Handing'
import B_TheredSec from '../Components/Business/B_ThredSec'
import B_FortSec from '../Components/Business/B_FourtSec'
import B_FifthSec from '../Components/Business/B_Fifth'
import B_Sixth from '../Components/Business/B_Sixth'

const Business = () => {
  return (
    <>
         <div>
        <Header/>
      
        
          <B_Hero/>
          <B_SecondSec/>
          </div> 
          <div style={{backgroundColor:'gray'}}>
          <Handing/>
          <B_TheredSec/>
          <B_FortSec/>
          </div>
          <B_FifthSec/>
          {/* <B_Sixth/> */}
        <div>
        <Footer/>
        </div>
         
    </>
  )
}

export default Business