import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import styles from './navbar.module.scss'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import logo from '../images/pt-logo.jpg'


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
    

    return <div className={scroll ? `${styles.navbar} navbar-black` : styles.navbar}>
      <Link to="/"><img src={logo} className={styles.logo}></img></Link>
    </div>
};

export default Navbar