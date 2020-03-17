import React from 'react';
import ReactDOM from 'react-dom';
// import Flickity from 'flickity';
// import 'flickity/dist/flickity.min.css';
import Flickity from 'react-flickity-component'
import Image1 from '../images/gatsby-astronaut.png'
import Image2 from '../images/gatsby-icon.png'


const images=[
  Image1,
  Image2
]

const flickityOptions = {
  initialIndex: 2
}


function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={Image1}/>
      <img src={Image2}/>
    </Flickity>
  )
}

export default Carousel