import React, { useState, useEffect } from 'react'
import '../styles/sidebar.css'
import logo1 from '../assets/logo.png';
import logo2 from '../assets/lgogsymbol.png';
import Dashboard from './admin-pages/Dashboard';
import Questions from './admin-pages/Questions';
import Settings from './admin-pages/Settings';
import Users from './admin-pages/Users';

export default function Admin ()
{
  const [ toggle, setToggle ] = useState( false );
  const [ tab, setTab ] = useState( '1' );
  let sstyle, linkstyle, logo, logostyle;

  const displayContent = () =>
  {
    switch ( tab )
    {
      case '1':
        return <Dashboard />;
      case '2':
        return <Questions />;
      case '3':
        return <Users />;
      case '4':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  useEffect( () =>
  {
    function handleResize ()
    {
      const isMdScreen = window.matchMedia( '(min-width: 950px)' ).matches;
      if ( isMdScreen )
      {
        setToggle( false );
      } else
      {
        setToggle( true );
      }
    }
    handleResize();
    window.addEventListener( 'resize', handleResize );
    return () =>
    {
      window.removeEventListener( 'resize', handleResize );
    };
  }, [] );
  if ( toggle )
  {
    sstyle = {
      width: '6rem',
      transition: '0.2s ease-out'
    }
    linkstyle = {
      display: 'none'
    }
    logo = logo2;
    logostyle = 'd-flex flex-column';
  } else
  {
    sstyle = {
      width: '15rem',
      transition: '0.2s ease-out'
    }
    linkstyle = {
      display: 'block'
    }
    logo = logo1;
    logostyle = 'd-flex';
  }
  return (
    <>
      <div className='row vh-100'>

        <div className="shadow" style={ sstyle }>
          <div className={ logostyle } >
            <a className="" href="/"><img src={ logo } className='ms-3 mt-3 me-1' alt='logo' height={ '32rem' } /></a>
            <button className="btn ms-1" type="button" onClick={ () => setToggle( !toggle ) } style={{border:'none'}}>
              <span style={ { fontSize: '32px' } }><i class="bi bi-list"></i></span>
            </button>
          </div>
          <ul className='sidebar-menu d-flex flex-column ms-0 ps-4 pe-3'>
            <div className={ `${ 'd-flex align-items-center nav-hover my-2 px-1' } rounded ${ ( tab === '1' ? 'bg-gray' : '' ) }` } typeof='button' onClick={ () => setTab( '1' ) }><i className="bi bi-grid-1x2-fill" ></i><span className='ms-3 mt-1 p-0' style={ linkstyle }>Dashboard</span></div>
            <div className={ `${ 'd-flex align-items-center nav-hover my-2 px-1' } rounded ${ ( tab === '2' ? 'bg-gray' : '' ) }` } typeof='button' onClick={ () => setTab( '2' ) }><i className="bi bi-question-circle-fill" ></i><span className='ms-3 mt-1 p-0' style={ linkstyle }>Questions</span></div>
            <div className={ `${ 'd-flex align-items-center nav-hover my-2 px-1' } rounded ${ ( tab === '3' ? 'bg-gray' : '' ) }` } typeof='button' onClick={ () => setTab( '3' ) }><i className="bi bi-person-fill" ></i><span className='ms-3 mt-1 p-0' style={ linkstyle }>Users</span></div>
            <div className={ `${ 'd-flex align-items-center nav-hover my-2 px-1' } rounded ${ ( tab === '4' ? 'bg-gray' : '' ) }` } typeof='button' onClick={ () => setTab( '4' ) }><i className="bi bi-gear-fill" ></i><span className='ms-3 mt-1 p-0' style={ linkstyle }>Settings</span></div>
          </ul>
        </div>

        {/* main conten  */ }
        <div className='' style={ { flex: '1', backgroundColor: '#f5f5f5' } }>
          { displayContent() }
        </div>
      </div>
    </>
  )
}
