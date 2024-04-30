import React,{useEffect} from 'react';
import TourPackages from '../components/TourPackages'
import Footer from '../components/Footer'

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