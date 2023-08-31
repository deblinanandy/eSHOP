import React from 'react';
import { NavLink } from 'react-router-dom';

import { HiOutlineShoppingCart } from 'react-icons/hi'; 
import { useSelector } from 'react-redux';
export default function Navbar() {
const {carts}=useSelector((state)=>state.allcart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand fw-bold fs-3" to="/">
        eSHOP 
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link fw-bold fs-5" exact to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-bold fs-5" to="/product">
              Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-bold fs-5" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-bold fs-5" to="/contact">
              Contact us
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-flex align-items-center">
          
        
          <NavLink to="/cart" className="nav-link ">
            <HiOutlineShoppingCart />
            Cart  
            <span className="cart-count">{carts.length}</span>
          </NavLink>
        </form>
      </div>
    </nav>
  );
}
