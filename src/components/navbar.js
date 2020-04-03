import { Link } from "gatsby";
import React, {useState, useEffect} from "react";
import styles from './navbar.module.scss';
import zeitouniLogo from '../images/logo zeituni_b.png';
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-cib/instagram';
import facebookIcon from '@iconify/icons-cib/facebook';
import sizeMe from 'react-sizeme';



const Navbar = (props) => {
    const [scroll, setScroll] = useState(false);
    const { width, height } = props.size;

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= window.innerHeight - 390) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      })
    });

    let deviceLarge
    width > 1800 ? deviceLarge = true : deviceLarge = false; 
    

    return <div>{ scroll ?
      <div className={`${styles.navbar} navbar-black`}>
        <div itemScope itemType='https://schema.org/Brand' className={deviceLarge ? styles.logos_large : styles.logos}>
            <div>
              <a href="https://www.instagram.com/zeitounigroupltd/" alt='instagram'><Icon icon={instagramIcon} className={styles.social}/></a>
              <a href="https://www.facebook.com/Zeitouni.Group.ltd.IL/" alt='facebook'><Icon icon={facebookIcon} className={styles.social}/></a>
            </div>
            <Link to="/"><img src={zeitouniLogo} className={styles.logo} alt='לוגו זיתוני' itemProp='logo'></img></Link>
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
        <div className={deviceLarge ? styles.menu_white_large : styles.menu_white}></div>
      </div>
      } 
    </div>
};

export default sizeMe({ monitorWidth: true })(Navbar)
