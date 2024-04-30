import React,{useEffect} from 'react';
import Allwedding from '../components/Allwedding'

const Wedding = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
    <Allwedding/>
    </>
  )
}

export default Wedding