import React from 'react'
import '../styles/profile.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import proPic from '../assets/pro pic.jpg';
import starimg from '../assets/circle-star.jpg';

export default function Profile() {
  return (
    <>
    <Navbar />
    <div className="profile-banner">
          
          <div className="infocardContainer">
            <div id="main">
              <img src={proPic} alt="Profile" />
            </div>
            <div id="textbois">
              <h3>Emil Alicic</h3>
              <h5>STDUS001</h5>
              <a href="#">example@gmail.com</a>

              <div id="hotlinks">
                <a href="#">
                  <img id="codepenio" src={starimg} alt="Sri Lanka" />
                </a>
                275 XP
              </div>
            </div>
          </div>
        </div>

       

        
   <Footer />
    </>
  );
}
