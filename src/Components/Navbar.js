import React, { Component } from "react";
// import lo;

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-light'>
        <img src={"./rsi_logo.jpg"} alt='logo' style={{ align: "center" }} />
        <button className='badge badge-light text-right'>Get a Quote</button>
        <button className='badge badge-light text-right'>CyberCompass</button>
        <button className='badge badge-light text-right'>Contact Us</button>
      </nav>
    );
  }
}

export default Navbar;
