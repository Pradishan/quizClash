import React, { lazy } from 'react'
import '../styles/profile.css'
import proPic from '../assets/pro pic.jpg';
import starimg from '../assets/circle-star.jpg';
import ProfileCard from '../components/ProfileCard';
import QuizMarkDetailsCard from '../components/QuizMarkDetailsCard';
import CertificateDetailsCard from '../components/CertificateDetailsCard';

const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))

export default function Profile() {

  return (
    <>
      <Navbar page={'profile'} />
      <div className="profile-banner">

        <div className="infocardContainer">
          <div id="main">
            <img src={proPic} alt="Profile" />
          </div>
          <div id="textbois">
            <h3>Emil Alicic</h3>
            <h5>STDUS001</h5>
            <a href="/">example@gmail.com</a>

            <div id="hotlinks">
              <a href="/">
                <img id="codepenio" src={starimg} alt="Sri Lanka" />
              </a>
              275 XP
            </div>
          </div>
        </div>
      </div>



      <div className="container">
        <div className="main-body">


          <div className="row gutters-sm">

            <div className="col-md-12" ></div>
            
            <ProfileCard />

            <div className="row gutters-sm">

             
            <QuizMarkDetailsCard/>


            <CertificateDetailsCard/>
            


            </div>
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
}
