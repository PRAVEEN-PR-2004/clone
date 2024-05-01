import React from 'react'
import Linkcom from './Linkcom'
import himg from '../assets/honeymoonimg.png'
import { Col, Container, Row } from 'react-bootstrap'
import himgi1 from '../assets/hindia1.png'
import himgi2 from '../assets/hindia2.png'
import himgi3 from '../assets/hindia3.png'
import himgi4 from '../assets/himg4.png'
import himgi5 from '../assets/himg5.png'
import himgi6 from '../assets/himg6.png'
import itour from '../assets/indiatour.png'
import itour2 from '../assets/indiatour3.png'
import int1 from '../assets/internation1.png'
import int2 from '../assets/international2.png'

import './Allhoneymoon.css';
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Allhoneymoon = () => {
  return (
    <>
    <div>
        <img
          src={himg}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto", marginBottom: "5px" }}
        />
      </div>

    <Linkcom children={"HoneyMoon"}/>
    <Container style={{marginTop:"7%"}}>
        <Row>
            <Col md={4}>
                <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
                Finding The Best Honeymoon Packages in India
                </h2>
                <hr
                  style={{ borderTop: "4px solid #FF5300", width: "30%" }}
                />
                <p className='mt-4' style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Discover your ideal Experience</p>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>The honeymoon is a happy, relaxing, exciting, and peaceful period in the life of any couple. It’s the time you spend getting to know each other and exploring terrains that have yet been unexplored. Picking the right destination for your honeymoon, therefore, is crucial. There are plenty of options you will come across when looking for the best honeymoon packages in India, and tourists have a lot to choose from our international honeymoon trip packages at GT Holidays as well.</p>

            </Col>
            <Col style={{position:"relative"}}> 
            <Link to='/packages'>
              <img src={himgi2} className='hmoon' alt="helo" style={{width:"90%",height:"85%",borderRadius:"10px"}} />
              </Link>
            </Col>
            <Col style={{position:"relative"}}>
              <Link to='/packages'>
              <img src={himgi1} className='hmoon'  alt="helo" style={{width:"90%",height:"85%",borderRadius:"10px"}} />
              </Link>
            </Col>
            <Col style={{position:"relative"}}>
              <Link to='/packages'>
              <img src={himgi3} className='hmoon'  alt="helo" style={{width:"90%",height:"85%",borderRadius:"10px"}} />
              </Link>
            </Col>
        </Row>
       <Row style={{marginBottom:"4%"}}>
        <h3 style={{fontFamily:"Playfair Display"}}>India</h3>
        <Col md={6}>
          <img src={itour} alt='india' style={{width:"100%"}}></img>
        </Col>
        <Col md={6}>
        <img src={itour2} alt='india' style={{width:"99%"}}></img>
        </Col>
       </Row>
        <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>Choosing the Best Honeymoon Packages in India</h2>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>India has several eclectic destinations to choose from for your honeymoon. There are the majestic Himalayas, the southern region with the greenery and houseboats, the eastern and northern regions with the mountains among other features, and also the magnificent deserts in the western areas. Some of the honeymoon trip packages in India we offer include the Himachal region, Andaman Islands, Goa, Munnar, Shimla, Ladakh, Kashmir, Jaipur, and Kerala.</p>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>If a honeymoon trip in India is what you are looking for, GT Holidays has the best options for you. The luxury honeymoon packages in India offered by us include a Lovers Paradise package to Kerala and a Heaven on Earth package covering Srinagar, Gulmarg, and Pahalgam. The Romantic Himachal package provided by GT holidays includes Manali, Rohtang Pass, and Kullu, and the Romantic Jaipur Delight covers Jaipur, Udaipur, and Mount Abu.</p>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Have you ever thought of visiting the place that’s known as Heaven on Earth a.k.a Kashmir? Our Glimpses of Kashmir package takes you to equally stunning mountainous views across the northern region of India. Start from Delhi where our tour representatives will meet you and transfer you to the vehicle. You will then proceed to go to the Jim Corbett National Park where you will spend the next day going through the greenery all around and exploring the park’s rich wildlife. On the third day, you will move from Jim Corbett to Nainital where you can visit the Naini Peak and go boating on the picturesque Naini lake. From Nainital, you will visit the Queen of the Hills, also known as Mussoorie, where you can visit the Municipal Gardens, Gun Hill, Mall Road, and Picture Castle. On the fifth and last day of your trip, you can head back from Mussoorie to Delhi.</p>
       <br></br><br></br>
        <Row className='mt-3' style={{marginTop:"5%"}}>  
            <Col md={4}>
                <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
                Finding The Best Honeymoon Packages in Other Countries
                </h2>
                <hr
                  style={{ borderTop: "4px solid #FF5300", width: "30%" }}
                />
                <p className='mt-4' style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Discover your ideal Experience</p>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>The honeymoon is a happy, relaxing, exciting, and peaceful period in the life of any couple. It’s the time you spend getting to know each other and exploring terrains that have yet been unexplored. Picking the right destination for your honeymoon, therefore, is crucial. There are plenty of options you will come across when looking for the best honeymoon packages in other countries, and tourists have a lot to choose from our india honeymoon trip packages at GT Holidays as well.</p>

            </Col>
            <Col style={{position:"relative"}}> 
            <Link>
              <img src={himgi4} className='hmoon' alt="helo" style={{width:"90%",height:"90%",borderRadius:"10px"}} />
              </Link>
            </Col>
            <Col style={{position:"relative"}}>
            <Link>
              <img src={himgi5} className='hmoon'  alt="helo" style={{width:"90%",height:"90%",borderRadius:"10px"}} />
              </Link>
            </Col>
            <Col style={{position:"relative"}}>
            <Link>
              <img src={himgi6} className='hmoon'  alt="helo" style={{width:"90%",height:"90%",borderRadius:"10px"}} />
              </Link>
            </Col>
            </Row>
            <br></br>
            <Row style={{marginBottom:"4%"}}>
        <h3 style={{fontFamily:"Playfair Display"}}>International</h3>
        <Col md={6}>
          <img src={int1} alt='india' style={{width:"100%"}}></img>
        </Col>
        <Col md={6}>
        <img src={int2} alt='india' style={{width:"99%"}}></img>
        </Col>
       </Row>
            <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>International Honeymoon Tour Packages at GT Holidays</h2>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Our international holiday packages include foreign honeymoon packages to Australia, Borocay, New Zealand, Mauritius, Greece, Italy, Singapore, Bora Bora, Hong Kong, Macau, Seychelles, Phuket, Kuala Lumpur, Maldives, and Sri Lanka.</p>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>The Treasure of Europe package from our honeymoon packages abroad will take you to London and Paris. Once you arrive at the London Heathrow Airport, you will be greeted by our tour representatives who will then transfer you to the hotel, and you can spend the whole day relaxing. On your second day, you can go sightseeing and visit Westminster Abbey and Buckingham Palace. You will take the Eurostar train to Paris on the third day and visit some of Paris’ best sites on our bus tour on the fourth and fifth days, including the Eiffel Tower, the Louvre Museum, Cathédrale Notre-Dame de Paris, Arc de Triomphe, and visit some of the famous Parisian cafes. On your last day, you can take a flight back home from Paris airport.</p>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>The Sizzling Singapore Tour we offer takes you to Singapore and Bintan. GT Holiday’s travel representative will meet you in a grand and comfortable Mercedes Benz in Singapore. You will then be taken to Bintan where you can enjoy a relaxing day at the island, and explore the Bintan Island at a leisurely pace on the second day. On the third day, you will be taken to Singapore where you will get to experience the Sentosa Experiential Tour. The Resorts World Sentosa will enable you to enjoy the world’s biggest aquarium. The fourth day will take you on a half-day city tour to see Gardens by the Bay, the Merlion Statue, Marina Bay, and China Town. For the fifth day, you will be taken on a tour of the Universal Studios, and take a flight back home on the sixth day.</p>
      
            
    </Container>
    <br></br>
    <Footer/>
    
    </>
  )
}

export default Allhoneymoon