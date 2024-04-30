import React,{useEffect} from 'react';

import Banner from '../components/Banner'
import TextCard from '../components/TextCard'
import ImgBanner from '../components/imgbanner'

import Spot from '../components/Spot'
import Content from '../components/Content'
import Address from '../components/Address'
import Familytour from '../components/Familytour'
import Footer from '../components/Footer'



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
     

        <Banner/>
        <Spot/>
       <TextCard/>
      <ImgBanner/>
      <Content/>
      <Familytour/>
      <Address/>
      <Footer/>
     

      

       
    </>
  )
}

export default Home