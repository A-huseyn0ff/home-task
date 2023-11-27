import React, { useState } from 'react'
import { Link,Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();
        const [activeLink, setActiveLink] = useState('/');
        const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
        const handleLinkClick = (to) => {
          setActiveLink(to);
          if (to === '/about') {
           
            setAboutDropdownOpen(!isAboutDropdownOpen);
          } else {
            
            setAboutDropdownOpen(false);
          }
        };
        const isSublinkActive = (sublink) => location.pathname.startsWith(sublink);
  return (
        <>
        <div className='header'>
        <div className='header_container'>
          <Link to='/' className='Logo'>
            Dazzling Demo
          </Link>
          <div className='navigation'>
            <Link
              to='/'
              className={`btn ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>
            <Link
              to='/gallery'
              className={`btn ${activeLink === '/gallery' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/gallery')}
            >
              Gallery
            </Link>
            <Link
              to='/shortcodes'
              className={`btn ${activeLink === '/shortcodes' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/shortcodes')}
            >
              Shortcodes
            </Link>
            
           <div    className={`btn2 ${activeLink === '/about' ? 'active2' : ''}`}
              onClick={() => handleLinkClick('/about')} >
           <Link
              to='#'
              style={{position:'relative'}}
            >
              About
              <span className='arrow'></span>
            </Link>
        
          {activeLink === '/about' && isAboutDropdownOpen && (
                <ul>
                  <Link to='/about/PageMarkup' className={`btn3 ${isSublinkActive('/about/PageMarkup') ? 'active3' : ''}`}>Page Markup And Formatting</Link>
                  <Link to='/about/ContactForm' className={`btn3 ${isSublinkActive('/about/ContactForm') ? 'active3' : ''}`}>Contact Form</Link>
                  <Link to='/about/PageImage' className={`btn3 ${isSublinkActive('/about/PageImage') ? 'active3' : ''}`}>Page Image Alignment (Full-Width)</Link>
                  <Link to='/about/ClearingFloats' className={`btn3 ${isSublinkActive('/about/ClearingFloats') ? 'active3' : ''}`} >Clearing Floats</Link>
                  <li  className='options'>Comment options</li>
                  <li  className='line'></li>
                  <Link to='/about/PageWithComments' className={`btn3 ${isSublinkActive('/about/PageWithComments') ? 'active3' : ''}`}>Page with comments</Link>
                  <Link to='/about/PageWithCommentDisabled' className={`btn3 ${isSublinkActive('/about/PageWithCommentDisabled') ? 'active3' : ''}`}>Page with comments disabled</Link>
                  <li  className='options'>More options</li>
                  <li  className='line'></li>
                  <li>This item is disabled</li>
                </ul>
              )}
           </div>
            <Link
              to='/languages'
              className={`btn ${activeLink === '/languages' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/languages')}
            >
              Languages
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      </>
  )
}

export default Layout