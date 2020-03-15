import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { isWidthUp } from "@material-ui/core";
import Slider from 'react-animated-slider';
import styles from './carousel.module.scss'
import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation.scss';

// import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';



const Carousel = ({}) => {
  return <div>
    <AwesomeSlider
    media={[
      {
        source: '/path/to/image-0.png',
      },
      {
        source: '/path/to/image-1.png',
      },
      {
        source: '/path/to/image-2.png',
      },
    ]}
  />
  </div>
};

export default Carousel