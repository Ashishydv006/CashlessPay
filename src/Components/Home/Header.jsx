import React, { useState } from 'react'
import '../../Css/Home/Header.Css'
import Hero from './Hero_Section'
import Logo from '../../assets/Your paragraph text.png'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [mobileItem, setMobileItem] = useState(false)
  const Clicked = () => {
    setMobileItem(!mobileItem)

  }

  return (
    <>
      <div className='nav'>
        <div className='navbar'>
          <div className="nav-left-logo">
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={mobileItem ? 'mobile-item mobile-items ' : ' nav-center-item'}>
            <ul className=' dropdown mobile-items' >
              <li className="dropbtn"><Link to='/'>PersonalPay</Link></li>

              <li><Link to="/businesspay">BusinessPay</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>





          <div className="nav-right-item">
            <div className='first-item'>
              <div className="dropdown-en">
                <p className="dropbtn-en">En</p>
                <div className="dropdown-content">
                  <a href="#">English</a>
                  <a href="#">Spanish</a>
                  <a href="#">Portuguese</a>
                  <a href="#">Danish</a>
                </div>
              </div>
              {/* <a href="#">En</a>
              <a href="#">Es</a> */}
              {/* <form>
                 <select>
                  <option value="Select your language">En</option>
                  <option value="saab">A</option>
                  <option value="opel">B</option>
                  <option value="audi">C</option>
                </select>
                
                  <select  >
                    <option value="Select your location">Es</option>
                    <option value="saab">A</option>
                    <option value="opel">B</option>
                    <option value="audi">C</option>
                  </select>
             
                  </form> */}
            </div>
            <div className='btn'>
              <button>DOWNLOAD APP</button>
            </div>
            {/* <i onClick={Clicked} id='hammenu' className="ri-menu-line"></i> */}
            <IoMenu onClick={Clicked} className='menu' />
            {/* drop down */}

          </div>
        </div>
      </div>

    </>
  )
}

export default Header
