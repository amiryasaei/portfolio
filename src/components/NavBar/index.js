import React, { useState } from 'react';
import { useIsMobile } from '../../utils/isMobile';
import mobileMenu from '../../assets/images/mobile-menu.svg';
import closeIcon from '../../assets/images/closeIcon.svg';
import './index.scss';

export const NavBar = () => {
  const [menuBarClicked, setMenuBarClicked] = useState(false);
  const { isMobile } = useIsMobile();

  return (
    <>
      {isMobile && !menuBarClicked ? (
        <div className='mobileNavBar'>
          <div className='nameLogo'>AMIR</div>
          <button onClick={() => setMenuBarClicked(true)}>
            <img src={mobileMenu} alt='menuLogo' />
          </button>
        </div>
      ) : isMobile && menuBarClicked ? (
        <div className='mobileMenu'>
          <button onClick={() => setMenuBarClicked(false)}>
            <img src={closeIcon} alt='closeMenu'/>
          </button>
        </div>
      ) : !isMobile ? (
        <div className='navBar'>
          <div className='nameLogo'>AMIR</div>
          <div className='optionWrapper'>
            <div>Home</div>
            <div>About</div>
            <div>Contact Me</div>
          </div>
        </div>
      ): null}
    </>
  );
};
