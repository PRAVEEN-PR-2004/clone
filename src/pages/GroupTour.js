import React,{useEffect} from 'react';
import TourGroup from '../components/TourGroup'

import Footer from '../components/Footer'

const GroupTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <TourGroup/>
    
    <Footer/>
    </>
  )
}

export default GroupTour