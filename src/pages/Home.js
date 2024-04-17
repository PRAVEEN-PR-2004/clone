import React from 'react'
import Appbar from '../components/Appbar'
import Banner from '../components/Banner'
import TextCard from '../components/TextCard'
import ImgBanner from '../components/imgbanner'
import Topbar from '../components/Topbar'
import Spot from '../components/Spot'
import Content from '../components/Content'


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

      

       
    </div>
  )
}

export default Home