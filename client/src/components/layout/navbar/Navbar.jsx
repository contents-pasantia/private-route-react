import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="bg-gray-900 text-white">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo"/>
            </Link>
          </div>
          <div>
            <ul className='flex flex-row-reverse'>
              <li className='m-2'><Link to="/">Home</Link></li>
              <li className='m-2'><Link to="/chat">Chat</Link></li>
              <li className='m-2'><Link to="/contact">Images</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Navbar;