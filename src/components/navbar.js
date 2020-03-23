import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import styles from './navbar.module.scss'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import logo from '../images/pt-logo.jpg'
import zeitouniLogo from '../images/logo 2.svg'
import { Icon, InlineIcon } from '@iconify/react';
import instagramIcon from '@iconify/icons-cib/instagram';
import facebookIcon from '@iconify/icons-cib/facebook';


const Navbar = ({}) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= window.innerHeight) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      })
    });
    

    return <div>{ scroll ?
      <div className={`${styles.navbar} navbar-black`}>
        <div className={styles.logos}>
            <div>
              <Link to="https://www.instagram.com/zeitounigroupltd/"><Icon icon={instagramIcon} className={styles.social}/></Link>
              <Link to="https://www.facebook.com/Zeitouni.Group.ltd.IL/"><Icon icon={facebookIcon} className={styles.social}/></Link>
            </div>
            <Link to="/"><img src={zeitouniLogo} className={styles.logo}></img></Link>
        </div>
      </div> 
      : 
      <div className={styles.navbar}>
        <div className={styles.logos}>
          <div>
            <Link to="https://www.instagram.com/zeitounigroupltd/"><Icon icon={instagramIcon} className={styles.social}/></Link>
            <Link to="https://www.facebook.com/Zeitouni.Group.ltd.IL/"><Icon icon={facebookIcon} className={styles.social}/></Link>
          </div>
        </div>
      </div>
      } 
    </div>
};

export default Navbar