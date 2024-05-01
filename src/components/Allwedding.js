import React from 'react'
import weddingimg from '../assets/weddingimg.png'
import Linkcom from './Linkcom'
import w1 from '../assets/wed1.png'
import w2 from '../assets/wed2.png'
 import w3 from '../assets/wed3.png'
// import w4 from '../assets/wed4.png'
// import w5 from '../assets/wed5.png'
import w7 from '../assets/wed7.png'
import w8 from '../assets/wed8.png'
import './Allhoneymoon.css'
// import w6 from '../assets/wed6.png'
import { Col, Container, Row } from 'react-bootstrap';

import Bookform from './Bookform'
import Slider3 from './Slider4'
import Slider5 from './Slider5'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Allwedding = () => {
  return (
    <>
    <div>
        <img
          src={weddingimg}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto", marginBottom: "5px" }}
        />
      </div>
      <Linkcom children={"Wedding"}/>
      <Container style={{marginTop:"7%"}}>
        <Row>
            <Col md={4} >
                <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
                Find The Perfect Destination
                </h2>
                <hr
                  style={{ borderTop: "4px solid #FF5300", width: "30%" }}
                />
                <p className='mt-4' style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Wedding Packages</p>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>A destination wedding is all about marrying the love of your life while being thousands of miles away from home. Whether you’re planning a wedding at a beach resort, a heritage palace (turned into a luxury hotel), or a quiet hillside house, GT Holidays offers the most affordable and best destination wedding packages in India.</p>

            </Col>
            <Col style={{position:"relative"}}> 
            <Link to='/packages'>
              <img src={w1} className='hmoon' alt="helo" style={{width:"90%",height:"85%",borderRadius:"10px"}} />
              </Link>
            </Col>
            <Col style={{position:"relative"}}>
              <Link to='/packages'>
              <img src={w2} className='hmoon'  alt="helo" style={{width:"90%",height:"85%",borderRadius:"10px"}} />
              </Link>

            </Col>
            <Col style={{position:"relative"}}>
              <Link to='/packages'>
              <img src={w3} className='hmoon'  alt="helo" style={{width:"90%",height:"85%",borderRadius:"10px"}} />
              </Link>
            </Col>
            <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
            Why Are Destination Wedding Packages Becoming Popular In India?
                </h2>
                <p  style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Destination weddings are no longer the preserve of the super-rich and affluent in India; plenty of middle-class Indians desire to tie the knot at an exotic location. With over 10 million marriages taking place each year, couples are looking for weddings that their guests will remember for a long time! In fact, Goa and Rajasthan are some of the most popular choices for couples looking for destination wedding packages in India.</p>
                <p  style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>With destination weddings, you hit two birds with one stone – not only do you get to enjoy your wedding at a gorgeous location, but you also save money. Yes, you read that right! Destination weddings are far less expensive than conventional Indian weddings, thanks to our customized destination wedding packages in India.</p>
        </Row>
        <Row style={{marginBottom:"4%"}}>
        
        <Col md={6}>
          <img src={w7} alt='india' style={{width:"100%"}}></img>
        </Col>
        <Col md={6} >
        <img src={w8} alt='india' style={{width:"95%"}}></img>
        </Col>
       </Row>
       <Row>
        <Col md={8}>
        <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
        India
        </h2>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>You can choose from a wide range of locations to organize your wedding, with destinations ranging from Goa, Udaipur, Kerala, Jaipur, and Shimla. At GT Holidays, we put together tailor-made destination wedding packages in India and across the world. But remember, your location choice and number of guests have a significant impact on the overall cost of the wedding.</p>
        <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>With gorgeous landscapes and stunning architectural wonders to pick from, our destination wedding packages in India offer the ideal synthesis of culture, tradition, and vibrancy. Trust us for one of a kind extravaganza that includes all the razzmatazz of a big fat Indian wedding! We promise a one-of-a-kind experience that you and the guests will remember forever.</p>
        <Slider3 className="mb-5"/>
        <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A",marginTop:"3%"}}>
        International
                </h2>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Selecting the ideal location for an international destination wedding is a challenging process. It has to tick all the right boxes. You need to pick a place that’s breathtakingly stunning and dreamlike yet enjoyable and affordable. At GT Holidays, we specialize in curating international destination wedding packages that match your style and budget.</p>
                <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
        Popular International Destination Wedding packages
                </h2>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Weddings in the past were a hyper-local event, orchestrated by a divergent group of individuals, ranging from the tent-men and caterers to tailors, beauticians, and other ancillary staff. Today, it is a polished event conducted by professionals who manage the entire event –from food and venue to entertainment and even finding honeymoon package deals. If you’re planning a dream wedding at an exotic location, GT Holidays can make your dreams come to life.</p>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>We offer international destination wedding packages in the following locations:</p>
       
        
        
        
        
        <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
        Sri Lanka
                </h2>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Thanks to its serene beaches and lush greenery, Sri Lanka has become one of the most popular choices for destination weddings. With magnificent resorts and villas nestled among the palms and the spectacular Indian Ocean stretching out in front of you, this area is a slice of heaven on Earth (also for weddings). At GT Holidays, we arrange memorable weddings – whether you’re keen on a private beach wedding or a sundowner atop a cliff. We’ll stop at nothing to make your day extra special!</p>
        
        <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
        Bali
                </h2>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Bali, the Land of Gods, is an enchanting place, especially for weddings. It is no wonder that people across the world dream of marrying in Bali. Bali is an ideal beach wedding destination with its lush greenery, blue skies, and turquoise waves. Visit us or call us for the best offers if you’re looking for Bali international destination wedding packages.</p>
       
        <h2 style={{fontFamily:"Playfair Display",color:"#3A3A3A"}}>
        Italy
                </h2>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>From renaissance architecture to delectable cuisine, fine art, and fashion – there’s so much to love and admire in Italy. Venice, the Amalfi Coast, Tuscany, Siena, and every other city in Italy offer a unique experience and are ideal locations for a dream wedding. It’s also a dream wedding destination for couples – who wouldn’t love to say I do amidst the soaring mountains, beautiful valleys, and other picturesque landscapes?</p>
                <p style={{color:"#808080",fontSize:"14px",fontFamily:"Poppins, sans-serif !important;"}}>Contact us to find the best international destination wedding package deals. Follow our Instagram profile to know about the latest offers and discounts.</p>

                <Slider5/>
        </Col>
        <Col md={4}>
          <Bookform/>
        </Col>
        
        </Row>
        </Container>
        <br></br> <br></br>
        <Footer/>
    </>
  )
}

export default Allwedding