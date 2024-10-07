import React from 'react'
import thnakimg from '../assets/thank.png'
import Linkcom from './Linkcom'
const Thankyou = () => {
  return (
    <>
     <div>
        <img
          src={thnakimg}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Linkcom children={"Thank you"}/>
      <h2 style={{fontFamily:"Playfair Display, serif"}}>Thank you for choosing GT Holidays</h2>
      <p sty></p>
    </>
  )
}

export default Thankyou