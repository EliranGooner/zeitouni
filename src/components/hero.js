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
        <h1>Zeitouni</h1>
        <p>Ut amet esse laborum commodo sit id duis enim occaecat deserunt nisi deserunt culpa dolore. Cupidatat cillum in elit do aliquip ullamco proident quis incididunt magna anim. Culpa incididunt aliqua velit aute officia eiusmod laborum.

        Do Lorem voluptate proident aute exercitation nostrud non ut s
        </p>
        <div className={styles.scroll} onClick={() => scroll.scrollMore(718)}>
          <a href="#"><span></span><span></span><span></span></a>
        </div>
    </div>
};

export default Hero