import React from 'react'
import '../css/navbar.css'
import insta from '../images/insta.png'
import fb from '../images/facebook.png'
import twitter from '../images/twitter.png'
import search from '../images/search.png'
import cart from '../images/cart.png'

function Navbar() {
  const check = ()=>{
    console.log("checked")
  }
  return (
    <div className='nav-head'>
        <div className="nav-left">
            <a href="" target="_blank"><img src={insta} alt="instagram" height="30px"/></a>
            <a href="" target="_blank"><img src={fb} alt="facebook" height="30px"/></a>
            <a href="" target="_blank"><img src={twitter} alt="twitter" height="30px"/></a>
        </div>
        <div className="nav-mid">
            <ul>
              <li>dbthtd</li>
              <li>dbthtd</li>
              <li>dbthtd</li>
              <li>dbthtd</li>
              <li>dbthtd</li>
            </ul>
        </div>
        <div className="nav-right">
            <button className="search">Search Here <img src={search} alt="search" height="30px"/></button>
            <button className="cart trans-btn"><img src={cart} alt="cart" height="30px"/></button>
        </div>
    </div>
  )
}

export default Navbar
