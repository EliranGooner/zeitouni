import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import './navbar-new.css'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { stack as Menu } from 'react-burger-menu'
import Navbar from './navbar'

const NavbarNew = ({}) => {
  const[path, setPath] = useState(null);
  useEffect(() => {
    const getCurrentPath = () => {
      const url = typeof window !== 'undefined' && window.location.href;
      const parts = url.split('/');
      const finalSegment = parts.pop() || parts.pop();  
      const pathArr = ['projects', 'about', 'avi', 'articles', 'contact'];
      let urlPath;
      pathArr.forEach(pathElement => {
        if (finalSegment.indexOf(pathElement) >= 0) {
          urlPath = pathElement;
        };
      });
      if (urlPath === "#" || !pathArr.includes(urlPath)) {
        setPath("item-home");
      } else {
        setPath(`item-${urlPath}`);
      }
    };
    getCurrentPath();
  });
  


  const showSettings = (event) => {
    event.preventDefault();
  }
  console.log(path)
  return <div id="outer-container">
    <Navbar />
    <Menu right disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <Link to="/" className={'item-home' === path ? 'current-path' : null}>בית</Link>
      <Link to="/projects/" className={'item-projects' === path ? 'current-path' : null}>פרויקטים</Link>
      <Link to="/about/" className={'item-about' === path ? 'current-path' : null}>עלינו</Link>
      <Link to="/avi/" className={'item-avi' === path ? 'current-path' : null}>אבי זיתוני</Link>
      <Link to="/articles/" className={'item-articles' === path ? 'current-path' : null}>כתבות</Link>
      <Link to="/contact/" className={'item-contact' === path ? 'current-path' : null}>צרו קשר</Link>
      <a onClick={ showSettings } className="menu-item--small" href=""></a>
    </Menu>
    <main id="page-wrap">
    </main>
  </div>
};

export default NavbarNew

