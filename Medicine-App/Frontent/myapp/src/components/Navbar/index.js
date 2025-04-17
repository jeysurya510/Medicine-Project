import { Component } from "react";
import './index.css'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

class Navbar extends Component{

render(){
    return(
        <nav className="nav-con">
            <ul className="ul-con-nav">
            <img className="logo-img" alt="logo" src='https://i.postimg.cc/MGxrqf5Y/Chat-GPT-Image-Apr-7-2025-04-01-07-PM-1.png'/>
             <li>Home</li>
             <li>About Us</li>
             <li>Shop</li>
             <li>Blog</li>
             <Link to='/login'>
             <button className="nav-btn" >Login</button>
             </Link>
             
            </ul>
            <div className="nav-icon-con">
                <FaCartShopping className="cart-icon"/>
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
                                <button className="popup-btn" onClick={() => {close()}}>Cancel</button>
                                <Link to='/login'>
                                <button className="popup-btn" >Logout</button>
                                </Link>
                            </div>
                        </div>)}
                    </Popup>
                    </div>
            </div>
        </nav>
    )
}

}
export default Navbar