import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import styles from './navbar.module.scss'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import logo from '../images/pt-logo.jpg'
import zeitouniLogo from '../images/logo 2.svg'


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
          <Link to="/"><img src={zeitouniLogo} className={styles.logo}></img></Link>
      </div> : 
      <div className={styles.navbar}>
      </div>
      } 
    </div>
};

export default Navbar