import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
//import Sidebar from "./sidebar/Sidebar";


class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="h-screen">
          {this.props.children}
        </div>
        <Footer />        
      </>
    );
  }
}

export default Layout;