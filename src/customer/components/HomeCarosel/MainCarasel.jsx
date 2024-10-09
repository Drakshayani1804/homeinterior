import React from 'react'
import { mainCaroselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarasel = () => {
    const items=mainCaroselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image}alt=''  style={{ width: item.width, height: item.height }}/>)
  return (
    <AliceCarousel
    items={items}   
    disableButtonsControls//to disable arrow marks below images in carasol
    autoPlay//by not clicking on dots images will automatically move just by keeping point
    autoPlayInterval={1000}//how much time it takes to move from 1 image to other
    infinite//from last image it goes to again first image 
/>
  )
}

export default MainCarasel
