import React from 'react'
import logo from '../assets/logo.png';
import '../styles/nav.css'

export default function Navbar ( props )
{
    const page = props.page;
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="py-1" href="/"><img src={ logo } alt='logo' height={ '30rem' } /></a>
                    <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-none d-lg-block align-items-center" >
                        <ul className="d-flex align-items-center p-0 m-0" style={ { listStyle: 'none' } }>
                            <li className="">
                                <a className={ `navlink nav-hover ${ ( page === 'home' ) ? 'active' : '' }` } aria-current="page" href="/">Home</a>
                            </li>
                            <li className="">
                                <a className={ `navlink nav-hover ${ ( props.tab === 'about' ) ? 'active' : '' }` } href="#about">About US</a>
                            </li>
                            <li className="nav-item">
                                <a className={ `navlink nav-hover ${ ( page === 'quizzes' ) ? 'active' : '' }` } href="/quiz">Quizzes</a>
                            </li>
                            <li className="">
                                <a className={ `navlink nav-hover ${ ( page === 'leaderboard' ) ? 'active' : '' }` } href="/leaderboard">Leader Board</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel" style={{width:'15rem',backgroundColor: 'rgba(255, 255, 255)', backdropFilter: 'blur(5px)'}}>
                <div className="offcanvas-header">
                    <a className="" href="/"><img src={ logo } alt='logo' height={ '30rem' } /></a>
                    <button typeof="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    
                    <ul className="" style={ { listStyle: 'none' } }>
                        <li className="">
                            <a className={ `navlink nav-hover ${ ( page === 'home' ) ? 'active' : '' }` } aria-current="page" href="/">Home</a>
                        </li>
                        <li className="">
                            <a className={ `navlink nav-hover ${ ( props.tab === 'about' ) ? 'active' : '' }` } href="#about">About US</a>
                        </li>
                        <li className="nav-item">
                            <a className={ `navlink nav-hover ${ ( page === 'quizzes' ) ? 'active' : '' }` } href="/quiz">Quizzes</a>
                        </li>
                        <li className="">
                            <a className={ `navlink nav-hover ${ ( page === 'leaderboard' ) ? 'active' : '' }` } href="/leaderboard">Leader Board</a>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}
