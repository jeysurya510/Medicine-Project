import { Component } from "react";
import './index.css'
import { FaCartShopping } from "react-icons/fa6";

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
             <button className="nav-btn" >Login</button>
            </ul>
            <div className="nav-icon-con">
                <FaCartShopping className="cart-icon"/>
                <button className="nav-btn1">Logout</button>
            </div>
        </nav>
    )
}

}
export default Navbar