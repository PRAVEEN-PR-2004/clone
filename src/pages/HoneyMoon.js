import React,{useEffect} from 'react';
import Allhoneymoon from '../components/Allhoneymoon'

const HoneyMoon = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <Allhoneymoon/>
    </>
  )
}

export default HoneyMoon