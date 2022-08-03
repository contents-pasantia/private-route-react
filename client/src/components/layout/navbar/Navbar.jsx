import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className="w-full bg-slate-800 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link to="/">
                  <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
                </Link>
              </div>
          </div>
          <div>
              <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
              >
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      <li className="text-white hover:text-indigo-200">
                          <Link to="/">Home</Link>
                      </li>
                      <li className="text-white hover:text-indigo-200">
                          <Link to="/gallery">Gallery</Link>
                      </li>
                      <li className="text-white hover:text-indigo-200">
                          <Link to="/chat">Chat</Link>
                      </li>
                      <li className="text-white hover:text-indigo-200">
                          <Link to="/component">Component</Link>
                      </li>
                  </ul>
                  <div className="mt-3 space-y-2 lg:hidden md:inline-block">
          </div>
              </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
          </div>
      </div>
  </nav>
    );
  }

}

export default Navbar;