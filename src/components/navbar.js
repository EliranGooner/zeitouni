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
    
    let currentPath

    

    return <div className={scroll ? `${styles.navbar} navbar-black` : styles.navbar}>
      <Link to="/">Logo</Link>
    </div>
};

export default Navbar