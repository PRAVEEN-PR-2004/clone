import React,{useEffect} from 'react';
import TourGroup from '../components/js/TourGroup'

import Footer from '../components/js/Footer'

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