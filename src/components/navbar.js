import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import styles from './navbar.module.scss'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';


const Navbar = ({}) => {
    const [clicked, setClicked] = useState(false);
    const [scroll, setScroll] = useState(false);
    const toggleClass = () => {
        const currentState = clicked;
        setClicked(!currentState);
    };
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= window.innerHeight) {
          setScroll(true)
        } else {
          setScroll(false)
        }
      })
    });
    return <div className={scroll ? `${styles.navbar} ${styles.navbar_white}` : styles.navbar}>
      <h3>Ayo</h3>
      <div className={clicked ? `${styles.menu} ${styles.active}` : styles.menu} onClick={toggleClass}>
        <Link to="/page-2/">Section #1</Link>
      </div>
      <aside className={clicked ? `${styles.menu__toggler} ${styles.active}` : styles.menu__toggler} onClick={toggleClass}><span></span></aside>
    </div>
};

export default Navbar