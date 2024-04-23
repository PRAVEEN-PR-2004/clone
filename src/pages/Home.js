import React from 'react'

import Banner from '../components/Banner'
import TextCard from '../components/TextCard'
import ImgBanner from '../components/imgbanner'

import Spot from '../components/Spot'
import Content from '../components/Content'
import Address from '../components/Address'
import Familytour from '../components/Familytour'
import Thankyou from '../components/Thankyou'


const Home = () => {
  return (
    <>
     

        <Banner/>
        <Spot/>
       <TextCard/>
      <ImgBanner/>
      <Content/>
      <Familytour/>
      <Address/>
      <Thankyou/>

      

       
    </>
  )
}

export default Home