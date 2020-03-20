import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import './navbar-new.css'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { stack as Menu } from 'react-burger-menu'
import Navbar from './navbar'

const NavbarNew = ({}) => {
  let currentPath
  useEffect(() => {
    const getCurrentPath = () => {
      const url = typeof window !== 'undefined' && window.location.href;
      const parts = url.split('/');
      const finalSegment = parts.pop() || parts.pop();  
      const pathArr = ['projects', 'about', 'avi', 'articles', 'contact'];
      let urlPath;
      pathArr.forEach(path => {
        if (finalSegment.indexOf(path) >= 0) {
          urlPath = path;
        };
      });
      if (urlPath === "#" || !pathArr.includes(urlPath)) {
        currentPath = "item-home";
      } else {
        currentPath = `item-${urlPath}`;
      }
    };
    getCurrentPath();
  });
  


  const showSettings = (event) => {
    event.preventDefault();
  }

  return <div id="outer-container">
    <Navbar />
    <Menu right disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <Link to="/" className={'item-home' === currentPath ? 'current-path' : null}>בית</Link>
      <Link to="/projects/" className={'item-projects' === currentPath ? 'current-path' : null}>פרויקטים</Link>
      <Link to="/about/" className={'item-about' === currentPath ? 'current-path' : null}>עלינו</Link>
      <Link to="/avi/" className={'item-avi' === currentPath ? 'current-path' : null}>אבי זיתוני</Link>
      <Link to="/articles/" className={'item-articles' === currentPath ? 'current-path' : null}>כתבות</Link>
      <Link to="/contact/" className={'item-contact' === currentPath ? 'current-path' : null}>צרו קשר</Link>
      <a onClick={ showSettings } className="menu-item--small" href=""></a>
    </Menu>
    <main id="page-wrap">
    </main>
  </div>
};

export default NavbarNew

