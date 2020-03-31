import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import './navbar-new.scss'
import { stack as Menu } from 'react-burger-menu'
import Navbar from './navbar'
import NavbarSmall from './navbar-small'
import NavbarMedium from './navbar-medium'
import sizeMe from 'react-sizeme';


const NavbarNew = (props) => {
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
  const { width, height } = props.size;

  let ToRenderChildNavbar 
  if (width > 1100) {
    ToRenderChildNavbar = Navbar
  } else if (1100 > width && width > 420) {
    ToRenderChildNavbar = NavbarMedium
  } else {
    ToRenderChildNavbar = NavbarSmall
  }


  const showSettings = (event) => {
    event.preventDefault();
  }
  return <div id="outer-container">
    <ToRenderChildNavbar />
    <Menu right disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <Link to="/" className={'item-home' === path ? 'current-path' : null}>בית</Link>
      <Link to="/projects/" className={'item-projects' === path ? 'current-path' : null}>פרויקטים</Link>
      <Link to="/about/" className={'item-about' === path ? 'current-path' : null}>עלינו</Link>
      <Link to="/avi/" className={'item-avi' === path ? 'current-path' : null}>אבי זיתוני</Link>
      <Link to="/articles/" className={'item-articles' === path ? 'current-path' : null}>מהתקשורת</Link>
      <Link to="/contact/" className={'item-contact' === path ? 'current-path' : null}>צרו קשר</Link>
      <a onClick={ showSettings } className="menu-item--small" href=""></a>
    </Menu>
    <main id="page-wrap">
    </main>
  </div>
};

export default sizeMe({ monitorWidth: true })(NavbarNew)
