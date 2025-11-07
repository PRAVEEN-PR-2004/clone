import React,{useEffect} from 'react';
import TourPackages from '../components/js/TourPackages'
import Footer from '../components/js/Footer'

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <TourPackages/>
    <Footer/>
    </>
    
  )
}

export default Packages