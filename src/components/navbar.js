import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import styles from './navbar.module.scss';
import zeitouniLogo from '../images/logo zeituni_b.png';
import { Icon, InlineIcon } from '@iconify/react';
import instagramIcon from '@iconify/icons-cib/instagram';
import facebookIcon from '@iconify/icons-cib/facebook';


const Navbar = ({}) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= window.innerHeight - 370) {
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
              <a href="https://www.instagram.com/zeitounigroupltd/" alt='instagram'><Icon icon={instagramIcon} className={styles.social}/></a>
              <a href="https://www.facebook.com/Zeitouni.Group.ltd.IL/" alt='facebook'><Icon icon={facebookIcon} className={styles.social}/></a>
            </div>
            <Link to="/"><img src={zeitouniLogo} className={styles.logo}></img></Link>
        </div>
      </div> 
      : 
      <div className={styles.navbar}>
        <div className={styles.logos}>
          <div>
            <a href="https://www.instagram.com/zeitounigroupltd/" alt='instagram'><Icon icon={instagramIcon} className={styles.social_white}/></a>
            <a href="https://www.facebook.com/Zeitouni.Group.ltd.IL/" alt='facebook'><Icon icon={facebookIcon} className={styles.social_white}/></a>
          </div>
        </div>
        <div className={styles.menu_white}></div>
      </div>
      } 
    </div>
};

export default Navbar