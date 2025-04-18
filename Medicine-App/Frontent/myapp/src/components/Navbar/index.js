import { Component } from "react";
import './index.css';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaBars, FaTimes } from 'react-icons/fa';

class Navbar extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="nav-con">
        <div className="nav-top">
          <img
            className="logo-img"
            alt="logo"
            src="https://i.postimg.cc/MGxrqf5Y/Chat-GPT-Image-Apr-7-2025-04-01-07-PM-1.png"
          />
          <button className="hamburger-btn" onClick={this.toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`ul-con-nav ${isMenuOpen ? 'show-menu' : ''}`}>
          <li onClick={this.closeMenu}>Home</li>
          <li onClick={this.closeMenu}>About Us</li>
          <li onClick={this.closeMenu}>Shop</li>
          <li onClick={this.closeMenu}>Blog</li>
          <Link to="/login" onClick={this.closeMenu}>
            <button className="nav-btn">Login</button>
          </Link>
        </ul>

        <div className="nav-icon-con">
          <FaCartShopping className="cart-icon" />
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="nav-btn1">
                  Logout
                </button>
              }
            >
              {close => (
                <div className="popup-con">
                  <h1 className="popup-h1">Are you sure you want to logout?</h1>
                  <div className="popup-btn-con">
                    <button className="popup-btn" onClick={() => close()}>
                      Cancel
                    </button>
                    <Link to="/login">
                      <button className="popup-btn">Logout</button>
                    </Link>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
