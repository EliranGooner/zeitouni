import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from './hero.module.scss';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ElementFade from 'react-reveal/Fade';
import zeitouniLogo from '../images/logo zeituni_b.png';
import Image from "./image";
import { Carousel } from "react-bootstrap";
import { Fade } from 'react-slideshow-image';


const fadeProperties = {
  arrows: false
}


const Hero = () => {
  
    return <div className={styles.hero}>
      <div className={styles.slide_container}>
        <Fade {...fadeProperties}>
          <div className={styles.each_fade}>
            <div className={styles.image_container}>
              <Image imgName='zeitouni-hero-1.jpg' className="d-block w-100" />
            </div>
          </div>
          <div className={styles.each_fade}>
            <div className={styles.image_container}>
              <Image imgName='zeitouni-hero-2.jpg' className="d-block w-100" />
            </div>
          </div>
        </Fade>
      </div>
        <div className={styles.text_container}>
          <ElementFade>
            <img src={zeitouniLogo} height={1200} width={1400}></img>
          </ElementFade>
        </div>
      <div className={styles.scroll} onClick={() => scroll.scrollMore(716.4)}>
        <a href="#" ><span></span><span></span><span></span></a>
      </div>
    </div>
};

export default Hero



// const Hero = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "hero-zeitouni.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 800, maxHeight: 400, quality: 100) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   `)
//     return <BackgroundImage
//     Tag="section"
//     className={styles.hero}
//     fluid={data.placeholderImage.childImageSharp.fluid}
//    >

//       <div className={styles.text_container}>
        
//             <Fade duration={3000}>
//               <img src={zeitouniLogo} height={1200} width={1400}></img>
//             </Fade>
          
        
//       </div>
    
//         <div className={styles.scroll} onClick={() => scroll.scrollMore(716.4)}>
//           <a href="#"><span></span><span></span><span></span></a>
//         </div>
//     </BackgroundImage>
// };
