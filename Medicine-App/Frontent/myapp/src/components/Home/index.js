import { Component } from "react";
import { FaPhone,FaInstagram,FaFacebookF,FaLinkedin,FaWhatsapp,FaTwitter,FaHeart } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import "./index.css";
import { Link } from "react-router-dom";
import Navbar from '../Navbar'
import { IoEarthOutline } from "react-icons/io5";
import { MdSevereCold } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";


const dummyProducts = [
  {
    id: 1,
    name: "Orphamed 200",
    category: "Orphan",
    description: "Treatment for a rare genetic enzyme deficiency.",
    image: "https://images.pexels.com/photos/8330984/pexels-photo-8330984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 12.99
  },
  {
    id: 2,
    name: "NeuroRelief Plus",
    category: "Essential",
    description: "Essential medication for neurodegenerative conditions.",
    image: "https://images.pexels.com/photos/12399575/pexels-photo-12399575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 80.50
  },
  {
    id: 3,
    name: "CryoCare Drops",
    category: "Emergency",
    description: "Used in ICU to manage acute inflammation in rare conditions.",
    image: "https://images.pexels.com/photos/16051938/pexels-photo-16051938/free-photo-of-pills-in-medical-disposable-bottle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 25.00
  },
  {
    id: 4,
    name: "CardioCore XR",
    category: "OTC",
    description: "Over-the-counter supportive medicine for heart health.",
    image: "https://images.pexels.com/photos/3683039/pexels-photo-3683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 42.00
  },
  {
    id: 5,
    name: "RespiraAid",
    category: "Essential",
    description: "Respiratory support treatment for rare lung conditions.",
    image: "https://images.pexels.com/photos/20140024/pexels-photo-20140024/free-photo-of-medicine-bottle-and-pills.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 16.75
  }
];

class Home extends Component {
  render() {
    return (
       <div className="home-container">
        <div className="winter-discount">
          <div className="contact-info-container">
          <div className="contact-info">
             <FaPhone className="icon-class"/>
             <p>+(971) 50 735 0851</p>
           </div>
           <div className="contact-info">
             <MdOutlineMarkEmailUnread className="icon-class"/>
             <p>medneedsforall@gmail.com</p>
           </div>
          </div>
          <p className="win-p">Winter Discount! Everything is 30% off. <Link to='/' >Shop now!</Link></p>
        </div>
        {/*navbar*/}
        <Navbar/>
        {/*Home*/}
        <div className="home-content">
          <div className="home-content-child">
             <h1 className="home-content-h1">Rooted in Compassion Powered by Global Access</h1>
             <p className="home-content-p">Making life-saving medicine available across borders</p>
             <div>
             <button className="contact-btn">Contact Us</button>
             </div>
            <div className="ten-year-con">
              <div className="ten-year-child">
              <h1 className="ten-year-h1">10+</h1>
              <p className="ten-year-p">years on the market</p>
              </div>
              <div className="ten-year-child-1">
              <h1 className="ten-year-h1">100%</h1>
              <p className="ten-year-p">natural products</p>
              </div>
            </div>
          </div>
          <img className="home-logo-cap" src="https://medneeds4all.com/assets/Capsule_img-SpFhLCGA.png" alt="home-logo" />
        </div>
        {/*our mission*/}
        <div className="about-main-con">
        <h1 className="ab-1">Our Mission</h1>
        <div className="about-container">
           <div className="about-child">
            <IoEarthOutline className="earthicon"/>
            <div>
            <h1>Global Reach</h1>
            <p>We connect patients across continents with the medicines they need — wherever they are</p>
            </div>
           </div>
           <div className="about-child">
            <MdSevereCold className="earthicon"/>
            <div>
            <h1>Cold Chain Logistics</h1>
            <p>We ensure safe delivery through temperature-controlled cold chain systems.</p>
            </div>
           </div>
           <div className="about-child">
            <TbTruckDelivery className="earthicon"/>
            <div>
            <h1>Timely Delivery</h1>
            <p>We deliver critical medicines on time, every time — without compromise</p>
            </div>
           </div>
        </div>
        </div>
         {/*Our Products best seller*/}
         <div className="product-main-parent-con">
          <div className="product-main-con">
          <h1>Our Bestsellers</h1>
          <button>Know More</button>
          </div>
          <ul className="product-list-ul">
              {dummyProducts.map((each) => (
                <li key={each.id} className="product-item">
                  <div className="product-card">
                  <img src={each.image} alt={each.name} className="list-img" />
                  </div>
                    <p className="name-p">{each.name}</p>
                    <p className="price-p">${` ${each.price} USD`}</p>
                    <button className="list-add-btn">Add to Cart</button>
                </li>
              ))}
            </ul>
       </div>
       {/*Contact us*/}
        <div className="contact-us-con">
          <div className="contact-us-card">
           <div className="contact-us-first">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" />
            <input type='number' placeholder="Number" />
            <input type='email' placeholder="Email" />
            <textarea cols="6" rows="5" placeholder="Enter your message here..."></textarea>
            <button>Submit</button>
           </div>
           <div className="contact-us-second">
            <div className="contact-info1">
              <FaMapMarkerAlt className="icon-class1"/>
              <div>
              <p>Office 1205, Al Saqr Business Tower,</p>
               <p>Sheikh Zayed Road, Dubai,</p>
                <p>United Arab Emirates</p>
              </div>
            </div>
            <div className="contact-info1">
             <FaPhone className="icon-class1"/>
             <p>+(971) 50 735 0851</p>
           </div>
           <div className="contact-info1">
             <MdOutlineMarkEmailUnread className="icon-class1"/>
             <p>medneedsforall@gmail.com</p>
           </div>
           <div className="contact-info1">
           <FaInstagram className="ins-logo-icon" />
           <FaFacebookF className="ins-logo-icon" />
           <FaLinkedin className="ins-logo-icon" />
           <FaWhatsapp className="ins-logo-icon" />
           <FaTwitter className="ins-logo-icon" />
           </div>
           </div>
          </div>

        </div>
        {/*footer page*/}
        <div className="footer-main-container">
          <h1>MedNeeds4All</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Login</li>
          </ul>
          <div className="contact-info1">
          <FaInstagram className="ins-logo-icon-footer" />
           <FaFacebookF className="ins-logo-icon-footer" />
           <FaLinkedin className="ins-logo-icon-footer" />
           <FaWhatsapp className="ins-logo-icon-footer"/>
           <FaTwitter className="ins-logo-icon-footer" />
          </div>
          <p className="cop-p">Copyright ©2021 All rights reserved |
          This template is made with by <FaHeart />  MedNeeds4All.com</p>
          <p className="dev-p">Design and Developed By Jeysurya</p>
        </div>
        </div>
    )
  }
}
export default Home;