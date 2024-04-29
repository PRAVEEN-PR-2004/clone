import React from 'react'
import { Container } from 'react-bootstrap'
import family from "../assets/family.jpg";

const Familytour = () => {
  return (
   <>
   <Container className='mt-3'>
    <p style={{fontSize:'25px'}}>GT Group Departures</p>
   <div > 
      <img src={family} alt="Holidays Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
   </Container>
   </>
  )
}

export default Familytour