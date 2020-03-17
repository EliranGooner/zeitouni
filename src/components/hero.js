import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styles from './hero.module.scss'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { isWidthUp } from "@material-ui/core";
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 


const Hero = ({}) => {
    return <div className={styles.hero}>
        
        <div className={styles.scroll} onClick={() => scroll.scrollMore(718)}>
          <a href="#"><span></span><span></span><span></span></a>
        </div>
    </div>
};

export default Hero