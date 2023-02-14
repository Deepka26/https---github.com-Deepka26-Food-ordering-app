import React from 'react'
import ReactDOM from 'react-dom/client'
import  './Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav>
        <a href="#" className="logo"><span>Food Mania</span></a>
        <ul className="navbar-list">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="main">
          
           <a href="#"><i className="fa fa-shopping-cart"></i></a>
           <a href="#" className="user"> <i className="fa fa-user"></i></a>
           <div className="fa fa-bars" id="menu-icon"></div>
  
        </div>
      </nav>
      
      </>
  )
}
