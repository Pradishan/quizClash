import React, { lazy } from 'react'
import logo from '../assets/logo.png'
import '../styles/home.css'
import { Link } from 'react-router-dom';
import featureContent from '../data/featureContent';


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
                                <p className='text-start d-none d-lg-block p-2 ps-0'>
                                    Lorem ipsum dolor sit amet consectetur. Tortor amet lectus egestas felis scelerisque quis cursus. Dolor dignissim habitasse mollis id vel massa sapien tortor velit. Gravida amet pellentesque vitae iaculis maecenas varius leo velit.
                                </p>

                                <div className='text-start'>
                                    <Link to={'/quiz'}>  <button className='btn btn-dark px-5 m-2 mx-0'>
                                        Play
                                    </button></Link>
                                    <Link to={'/signup'}>  <button className='btn btn-dark px-5 m-2 mx-0'>
                                        Get Start
                                    </button></Link>
                                </div>

                            </div>
                            {/* <img src={logosmall} alt="Banner Image" className="" style={{height:'20rem',width:'26rem',position:'absolute',top:'15rem',right:'5rem',opacity:'0.5'}}/> */}
                        </div>
                    </center>
                </div >
            </div >
            <div className='container'>
                <center>
                    <h1 className='fw-bold py-5'>What is Quizclash ?</h1>
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
                    <h1 className='fw-bold pt-5'>About US</h1>
                    <p className='px-4'>
                        Lorem ipsum dolor sit amet consectetur. Tortor amet lectus egestas felis scelerisque quis cursus. Dolor dignissim habitasse mollis id vel massa sapien tortor velit. Gravida amet pellentesque vitae iaculis maecenas varius leo velit. Amet diam tortor neque nisl ornare dis mollis montes sociis. In purus eget sagittis nam leo quis. Nulla imperdiet non turpis ipsum egestas. Tortor semper amet orci aliquet ut non. Integer phasellus ante orci senectus in in vitae ullamcorper sed. At venenatis amet varius sollicitudin.
                    </p>
                </center>
                <div className='row px-4 mt-5'>
                    <div className='col-sm-6'>
                        <h1 style={{ fontSize: '5rem' }}>Benefits</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tortor amet lectus egestas felis scelerisque quis cursus. Dolor dignissim habitasse mollis id vel massa sapien tortor velit. Gravida amet pellentesque vitae iaculis maecenas varius leo velit. Amet diam tortor neque nisl ornare dis mollis montes sociis. In purus eget sagittis nam leo quis. Nulla imperdiet non turpis ipsum egestas. Tortor semper amet orci aliquet ut non. Integer phasellus ante orci senectus in in vitae ullamcorper sed. At venenatis amet varius sollicitudin.
                        </p>
                    </div>
                    <div className='col-sm-6'>
                        <img src={logo} alt="Banner Image" className="img-fluid" />
                    </div>
                </div>
                <div className='row px-4 mt-5'>
                    <div className='col-sm-6'>
                        <img src={logo} alt="Banner Image" className="img-fluid" />
                    </div>
                    <div className='col-sm-6'>
                        <h1 style={{ fontSize: '5rem' }}>Future planes</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tortor amet lectus egestas felis scelerisque quis cursus. Dolor dignissim habitasse mollis id vel massa sapien tortor velit. Gravida amet pellentesque vitae iaculis maecenas varius leo velit. Amet diam tortor neque nisl ornare dis mollis montes sociis. In purus eget sagittis nam leo quis. Nulla imperdiet non turpis ipsum egestas. Tortor semper amet orci aliquet ut non. Integer phasellus ante orci senectus in in vitae ullamcorper sed. At venenatis amet varius sollicitudin.
                        </p>
                    </div>
                </div>

                <center>
                    <h1 className='fw-bold pt-5'>Collaborate with us</h1>
                    <p className='px-4'>
                        Lorem ipsum dolor sit amet consectetur. Tortor amet lectus egestas felis scelerisque quis cursus. Dolor dignissim habitasse mollis id vel massa sapien tortor velit. Gravida amet pellentesque vitae iaculis maecenas varius leo velit. Amet diam tortor neque nisl ornare dis mollis montes sociis. In purus eget sagittis nam leo quis. Nulla imperdiet non turpis ipsum egestas. Tortor semper amet orci aliquet ut non. Integer phasellus ante orci senectus in in vitae ullamcorper sed. At venenatis amet varius sollicitudin.
                    </p>
                </center>

                <div className='row'>
                    <div className=' col-md-2  col-sm-12 mb-3 d-flex justify-content-center'>

                    </div>
                    <div className=' col-md-8  col-sm-12 mb-3 d-flex justify-content-center'>
                        <center>
                            <h2 className='pt-5'>Still have questions?</h2>
                            <p className='text-muted px-4'>
                            Please describe your case to receive the most accurate advice.
                            </p>
                            <Link to={'/'}>  <button className='btn btn-dark px-5 m-2 mx-0'>
                                        Contact Us
                                    </button></Link>
                                    <SocialMedia />
                        </center>
                    </div>
                    <div className=' col-md-2  col-sm-12 mb-3 d-flex justify-content-center'>

                    </div>
                </div>

              

            </div>



            <Footer />
        </>
    )
}
