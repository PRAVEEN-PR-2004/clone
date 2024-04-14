import React from 'react'
import Appbar from '../components/Appbar'
import Banner from '../components/Banner'
import TextCard from '../components/TextCard'
import ImgBanner from '../components/imgbanner'
import Topbar from '../components/Topbar'

const Home = () => {
  return (
    <div>
      <Topbar/>
        <Appbar/>
        <Banner/>
       <TextCard/>
      <ImgBanner/>

       
    </div>
  )
}

export default Home