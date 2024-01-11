import React, { useState } from 'react';
import { useIsMobile } from '../../utils/isMobile';
import mobileMenuIcon from '../../assets/images/mobileMenuIcon.svg';
import closeIcon from '../../assets/images/closeIcon.svg';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import {clsx} from 'clsx';

export const NavBar = () => {
  const [menuBarClicked, setMenuBarClicked] = useState(false);
  const { isMobile } = useIsMobile();
  const location = useLocation();

  return (
    <>
      {isMobile && !menuBarClicked ? (
        <div className='mobileNavBar'>
          <div className='nameLogo'>AMIR</div>
          <button className='menuButton' onClick={() => setMenuBarClicked(true)}>
            <img src={mobileMenuIcon} alt='menuLogo' />
          </button>
        </div>
      ) : isMobile && menuBarClicked ? (
        <div className='mobileMenu'>
          <div className='topBar'>
            <div className='nameLogo'>AMIR</div>
            <button className='menuButton' onClick={() => setMenuBarClicked(false)}>
                <img src={closeIcon} alt='closeMenu'/>
            </button>
          </div>
          <div className='linkEnteries'>                
            <Link to={'./'} onClick={()=> setMenuBarClicked(false)}>
              <div className={clsx(location.pathname==='/'?'activeLinkContainer':'linkContainer')}>Home</div>
            </Link>
            {/* <Link to={'/Projects'} onClick={()=> setMenuBarClicked(false)}>
              <div className={clsx(location.pathname==='/Projects'?'activeLinkContainer':'linkContainer')}>Projects</div>
            </Link> */}
            <Link to={'/Contact'} onClick={()=> setMenuBarClicked(false)}>
              <div className={clsx(location.pathname==='/Contact'?'activeLinkContainer':'linkContainer')}>Contact Me</div>
            </Link>
          </div>
        </div>
      ) : !isMobile ? (
        <div className='navBar'>
          <div className='nameLogo'>AMIR</div>
          <div className='optionWrapper'>
          <Link to={'./'} onClick={()=> setMenuBarClicked(false)}>
              <div className={clsx(location.pathname==='/'?'activeLinkContainer':'linkContainer')}>Home</div>
            </Link>
            {/* <Link to={'/Projects'} onClick={()=> setMenuBarClicked(false)}>
              <div className={clsx(location.pathname==='/Projects'?'activeLinkContainer':'linkContainer')}>Projects</div>
            </Link> */}
            <Link to={'/Contact'} onClick={()=> setMenuBarClicked(false)}>
              <div className={clsx(location.pathname==='/Contact'?'activeLinkContainer':'linkContainer')}>Contact Me</div>
            </Link>
          </div>
        </div>
      ): null}
    </>
  );
};
