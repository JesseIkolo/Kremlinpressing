import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {CosmoIcon} from "./cosmoIcon"
import {TextButton, Notification, Para} from '../components/molecule'

const Header = ({ siteTitle }) =>{
  // determined if page has scrolled and if the view is on mobile
  const [state, setState] = useState({
    scrolled: false,
    visible: false,
    hided : false, //for the header
    lastScrollPosition : 0,
    menuIsShow: false,
  });

  const toggleMenu = ()  =>{
      setState({ 
        ...state,
        menuIsShow: !state.menuIsShow });
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;

      if (isScrolled !== state.scrolled) {
        
        if(window.scrollY > state.lastScrollPosition && window.scrollY > document.querySelector("header").clientHeight){
          document.querySelector("header").classList.add("nav-up")
          
        }else if(window.scrollY  + window.clientHeight < document.clientHeight) {
          document.querySelector("header").classList.remove("nav-up")
          // !!!!!!!!!!!!!!!!!!!!!
        }

        setState({
          ...state,
          scrolled: !state.scrolled,
          lastScrollPosition : window.scrollY
        });
      }
    };
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [state.scrolled]);
  // toggle dropdown visibility
  const toggleVisibility = () => {
    setState({
      ...state,
      visible: !state.visible,
    });
  };

  return(
    <>
  <header className="top-bar" data-active={state.scrolled}>
      <div className="container top-nav">
          <div className="nav-logo">
          <Link to="..">
              <h1 className="logo">Kremlin Pressing</h1>
          </Link>
          
          </div>
          <ul className={"nav-links" + (state.menuIsShow ? " isShow" : "")}>
            <li>
              <Link to="../pricing">Tarifs et Services</Link>
            </li>
            <li>
              <Link to="../textimony">Avis et Temoignages</Link>
            </li>
            <li>
              <Link to="../entreprise">Entreprise</Link>
            </li>
            <li>
              <Link to="../signIn">S'inscire</Link>
            </li>
            {/* <li>
              <Link to="../partenaires">Partenaires</Link>
            </li> */}
            {/* <li>
              <Link to="../FAQs">FAQs</Link>
            </li> */}
            <li className="button">
              <TextButton 
                  cosmoIcon={false}
                  text="Connexion"
                  background={true}
                  backgroundColor="#00C67E"
                  textColor="#fff"
                  to="../signUp"
                  />
            </li>
            <li className="navigation-show" onClick={() => toggleMenu()}>
              <CosmoIcon icon="menu"/>
            </li>
            <li className="navigation-close" onClick={() => toggleMenu()}>
              <CosmoIcon icon="close" iconColor="#fff"/>
            </li>
          </ul>
          
      </div>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
  </>
  )}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
