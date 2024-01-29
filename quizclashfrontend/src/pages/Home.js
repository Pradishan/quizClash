import React, { lazy } from 'react'
import logo from '../assets/logo.png'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import featureContent from '../data/featureContent';

import img1 from '../assets/home/image 1.svg';
import img2 from '../assets/home/image 2.svg';
import img3 from '../assets/home/image 3.svg';
import img4 from '../assets/home/image 4.svg';


const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
const FeatureCard = lazy(() => import('../components/FeatureCard'));
const SocialMedia = lazy(() => import('../components/SocialMedia'));

export default function Home() {
    return (
        <>
            <Navbar page={'home'} />
            {/* <!-- Banner image --> */}
            <div className="container-fluid vh-50 p-0" style={{ marginTop: '56px' }}>
                <div className=" home-banner ">
                    <center>
                        <div className='container row align-items-center p-5 justify-content-center'>

                            <div className='col-sm-6'>
                                <img src={logo} alt="Banner Image" className="img-fluid" />
                            </div>
                            <div className='col-sm-6'>
                                <h1 className='text-start  d-none d-md-block'>Quiz Clash</h1>
                                <p className='text-start  d-lg-none d-md-block p-2 ps-0 pb-1'>
                                    Welcome to QuizClash, where knowledge meets excitement! Embark on an exhilarating journey of quizzes, challenges, and rewards. Unleash your inner quiz champion, conquer quizzes to earn XP, and climb the leaderboard.
                                </p>
                                <p className='text-start  d-none d-lg-block p-2 ps-0 pb-1'>
                                    "Welcome to QuizClash, where knowledge meets excitement! Embark on an exhilarating journey of quizzes, challenges, and rewards. Unleash your inner quiz champion, conquer quizzes to earn XP, and climb the leaderboard. Join us in this fusion of learning and fun – because at QuizClash, every question is a step towards brilliance! Start your quiz adventure now!"
                                </p>

                                <div className='text-start'>
                                    <Link to={'/quiz'}>  <button className='btn btn-dark px-4 m-2 mx-0 mt-0'>
                                        Play
                                    </button></Link>
                                    <Link to={'/signup'}>  <button className='btn btn-dark px-4 m-2 mx-0 mt-0'>
                                        Get Start
                                    </button></Link>
                                </div>

                            </div>
                        </div>
                    </center>
                </div >
            </div >
            <div className='container'>
                <center>
                    <h1 className='fw-bold pt-5 pb-3'>What is Quizclash ?</h1>
                </center>
                <div className='row'>
                    <div className=' col-md-4  col-sm-12 mb-3 d-flex justify-content-center'>
                        <FeatureCard data={featureContent?.vision} />
                    </div>
                    <div className=' col-md-4  col-sm-12 mb-3 d-flex justify-content-center'>
                        <FeatureCard data={featureContent?.mission} />
                    </div>
                    <div className=' col-md-4  col-sm-12 mb-3 d-flex justify-content-center'>
                        <FeatureCard data={featureContent?.goal} />
                    </div>
                </div>
                <center>
                    <h1 className='fw-bold pt-5' id='about'>About US</h1>
                    <p className='px-4'>
                        QuizClash is not just a platform for quizzes; it's a dynamic space where the excitement of competition meets the joy of learning. Our mission is to provide an engaging environment that caters to both seasoned quiz enthusiasts and those new to the journey of knowledge. With diverse challenges and a vibrant community, QuizClash is your destination for thrilling intellectual adventures.
                        At the heart of QuizClash is our commitment to fostering a sense of community and celebrating achievements. Join us as we redefine the quiz experience, making it more than a competition—it's a vibrant space where curiosity thrives, and every question is a step towards brilliance. Explore, compete, and enjoy the journey of continuous learning with QuizClash!"
                    </p>
                </center>
                <div className='row px-4 mt-5'>
                    <div className='col-sm-6'>
                        <h1 style={{ fontSize: '5rem' }}>Benefits</h1>
                        <p>
                            Conquer quizzes and reap the rewards – earn XP points that not only reflect your achievements but also unlock a world of opportunities on your personalized profile. Beyond the quizzes, QuizClash is a vibrant community, where like-minded individuals come together to celebrate continuous learning. Experience the joy of learning in every question and revel in the camaraderie that defines the unique spirit of QuizClash. Join us in this dynamic fusion of knowledge, competition, and community, where each quiz is a step towards personal and collective brilliance.
                        </p>
                    </div>
                    <div className='col-sm-6'>
                        <img src={img1} alt="Banner Image" className="img-fluid" />
                    </div>
                </div>
                <div className='row px-4 mt-5'>
                    <div className='col-sm-6'>
                        <img src={img2} alt="Banner Image" className="img-fluid" />
                    </div>
                    <div className='col-sm-6'>
                        <h1 style={{ fontSize: '5rem' }}>Future planes</h1>
                        <p>
                            Exciting developments await at QuizClash! In the near future, we aspire to enhance your experience by introducing E-certificates for quiz participants – a testament to your dedication and knowledge. Stay tuned for more innovations as we continue to evolve, offering new avenues for recognition and celebrating your achievements. Our commitment to making QuizClash a dynamic hub of learning and camaraderie remains unwavering, and we look forward to unlocking even more possibilities together. Your journey with us is just beginning, and the future holds limitless potential. Join us as we shape the next chapter of QuizClash – where learning knows no bounds!"
                        </p>
                    </div>
                </div>

                <center>
                    <h1 className='fw-bold pt-5'>Collaborate with us</h1>
                    <p className='px-4'>
                        QuizClash invites you to be a part of our dynamic community! Whether you're an educator, content creator, or enthusiast, let's join forces to create engaging quizzes and foster a culture of continuous learning. Collaborate with QuizClash to share your expertise, contribute to our diverse quiz library, and inspire others on their intellectual journey. Together, we can make QuizClash a hub of knowledge, innovation, and collaborative excellence. Join hands with us as we shape the future of interactive learning experiences!"
                    </p>
                </center>

                <div className='row'>
                    <div className=' col-md-2  col-sm-12 mb-3 d-flex justify-content-center'>
                    <img src={img3} alt="Banner Image" className="img-fluid" />
                    </div>
                    <div className=' col-md-8  col-sm-12 mb-3 d-flex justify-content-center'>
                        <center>
                            <h2 className='pt-5'>Still have questions?</h2>
                            <p className='text-muted px-4'>
                                Please describe your case to receive the most accurate advice.
                            </p>
                            <Link to={'/'}>  <button className='btn btn-dark px-5 m-2 mx-0 my-2'>
                                Contact Us
                            </button></Link>
                            <SocialMedia />
                        </center>
                    </div>
                    <div className=' col-md-2  col-sm-12 mb-3 d-flex justify-content-center'>
                        <img src={img4} alt="Banner Image" className="img-fluid" />
                    </div>
                </div>



            </div>



            <Footer />
        </>
    )
}
