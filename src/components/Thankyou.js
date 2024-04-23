import React from 'react'
import thank from '../assets/thank.png'
import Linkcom from './Linkcom'
const Thankyou = () => {
  return (
    <>
     <div style={{ marginBottom: '4%' }}> 
      <img src={thank} alt="Holidays Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
    <Linkcom children={"Thank you"}/>
    <div className='d-flex justify-content-center'>
        <h1>Thank you for choosing GT Holidays</h1>
        <p>We have received your message regarding your trip enquiry. Our team will be in touch with you shortly.</p>

        <p>If you want to speak to us kindly call us at +91 9940 8822 00.</p>
    </div>


    </>
  )
}

export default Thankyou