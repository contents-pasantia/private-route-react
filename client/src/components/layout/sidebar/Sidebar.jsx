import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";

class SideBar extends Component{
  constructor(){
    super();
  }


  render(){
    return(
      <div className="bg-gray-600 text-white">
        <div className="sidebar-header">
          <h3>
            <Link to="/">
              <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo" />
            </Link>
          </h3>
        </div>
        <div className="sidebar-body">
          <ul className='flex flex-col'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;