import React from 'react'
import Appbar from '../components/Appbar'
import Banner from '../components/Banner'
import TextCard from '../components/TextCard'
import ImgBanner from '../components/imgbanner'
import Topbar from '../components/Topbar'
import Spot from '../components/Spot'
import Content from '../components/Content'
import Address from '../components/Address'


const Home = () => {
  return (
    <div>
      <Topbar/>
        <Appbar/>

        <Banner/>
        <Spot/>
       <TextCard/>
      <ImgBanner/>
      <Content/>
      <Address/>

      

       
    </div>
  )
}

export default Home