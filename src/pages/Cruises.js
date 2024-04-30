import React,{useEffect} from 'react';
import cruise from "../assets/cruise.png";
import cruises1 from "../assets/cruises1.jpg";
import cruises2 from "../assets/cruises2.jpg";
import cruises3 from "../assets/cruises3.jpg";
import cruises4 from "../assets/cruises4.jpg";
import cruises5 from "../assets/cruises5.jpg";
import cruises6 from "../assets/cruises6.jpg";
import cruises7 from "../assets/cruises7.jpg";

import Linkcom from "../components/Linkcom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";

const Cruises = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <div style={{ marginBottom: "1%" }}>
        <img
          src={cruise}
          alt="Holidays Banner"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
     <Linkcom children={"Cordelia Cruises"}/>
      <Container>
        <Row className="mb-3">
          <Col md={8}>
            <p>— Cruise Overview</p>
            <p style={{fontSize:"30px"}}>Cordelia Cruises Packages in India</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>
              How does the idea of “waking up to a new destination everyday”
              sound to you? Apparently, the imagination itself creates
              goosebumps of excitement for all of us.
            </p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>
              What if we tell you that you can experience the voyage of the
              breathtaking Indian Ocean with Cordelia Cruises? Well, it sounds
              great. Isn’t it? The cruise tour will be launched in some
              fantastic destinations, like, Goa, Andaman, Kochi, Mumbai,
              Ganapatipule, Diu, and many other seaboard destinations.
              Cordelia Cruises is all set to serve you with the mesmerizing
              beauty of the Indian coastline. Click here to view all Cordelia
              Cruise Packages.
            </p>
          </Col>
          <Col>
            <img src={cruises1} alt="c" style={{ width: "100%" }} />
          </Col>
        </Row>
        <p style={{fontSize:"30px"}}>Cordelia Cruises India</p>
        <Row className="mb-5">
          <Col md={8}>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}> 
              Cordelia Cruises is a well-known cruise company in India. The
              company has recently taken over the ships from the Royal Caribbean
              International, which will be launched in India. It was a piece of
              big news, in late December 2020, that Cordelia Cruises bought
              cruise Empress of the seas. Due to this, the ocean of India will
              get a new partner.
            </p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>
              Cordelia is trying to justify its name by promoting the great,
              modern, and traditional cruise culture, which will leave the
              Indians amazed. It is providing a luxury ship to the Indians
              which will enable them to enjoy their holidays in a new way.
            </p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>
              The Cordelia cruise has sailings from Mumbai to Goa cruise, Mumbai
              to Diu cruise, Mumbai to Lakshadweep cruise, Chennai to Maldives
              Cruise, Chennai to Galle Cordelia cruise, and Chennai to
              Trincomalee Cruise. Onboard, you will be pleased by the
              hospitality services. Each section of the cruise will make you
              feel homely. One of the big advantages is that it will cater to
              you with international services even in your home country.
            </p>
          </Col>
          <Col>
            <img src={cruises2} alt="c" style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={8}>
            <p style={{fontSize:"30px"}}>A journey of Empress Of The Seas</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Let’s have a quick tour of the Empress of the Seas. Empress of the Seas is a cruise recently owned by India’s famous organization, Cordelia Cruises.</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Empress of the seas is not less than a dream come true. Watching this charming cruise is thrilling for each soul. You would definitely fall in love with its beauty and charm.</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>When you are on board, you will feel the enthusiasm and elegance within you. There is no limit to the trill that Empress of seas offers you with great meals, stunning activities, and live concerts. Nothing can stop you from enjoying it.</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>It serves in India’s elegant ports, such as Chennai, Kochi, Mumbai, Vizag, Mormugao, Lakshadweep, along with the international coast, Sri Lanka.</p>
          </Col>
          <Col>
          <img src={cruises3} alt="c" style={{ width: "100%" }} />
          </Col>

        </Row>
        <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Based on the video footage and photos, it is seen that the Empress has a massive logo of ‘Cordelia Cruises’ on its hull. You will see the Empress of the sea capturing the Indian ocean in the upcoming months.</p>
        <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Empress will give you a lot of memories that you would not manage to forget quickly. Empress will not fail in impressing you at any point. You will witness the eye-catching sunset to the beautiful sunrise while on the cruise tour.</p>
        <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>The Empress of the ship was first ruled by Admiral Cruises and then by the Royal Caribbean International. It entered into the seawater in 1990 as Nordic Express, which was later renamed as the Empress of seas by the Royal Caribbean International.</p>
        <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>After roaming through the San Juan, Bahamas, Puerto Rico, Bermuda route, and South America, the Empress is now ready to cruise the Indian East and West ports, under the direction of Indian Cruise Liners, Cordelia Cruises by Waterways Tourism Pvt Ltd.</p>
        <Row className="mt-5 mb-3"> 
        <Col md={6}>
          <p style={{fontSize:"30px"}}>Everything You want to know about the Empress Of The Seas</p>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Here are the minute details you need to know about the cruise before boarding it. Please go through every section given below.</p>
          <p style={{fontSize:"20px"}}>Technical Details of the Ship</p>
          <ul>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Type: Empress-class cruise ship</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Capacity: 1,840</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Crew: 668</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Cabins: 796 Cabins</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Speed: 19.5 knots (36.1 km/h; 22.4 mph)</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Draught: 7.10 m (23.29 ft)</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Decks: 11 Passenger Decks</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Installed power: 2 × Wärtsilä-Duvant Crespelle diesel combined 16,200 kW</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Tonnage: 48,563 GT / 5,344 DWT</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Length: 210.81 m (691.63 ft)</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Beam: 30.70 m (100.72 ft)</li>
          </ul>

        </Col>
        <Col>
        <img src={cruises4} alt="c" style={{ width: "100%" }} />
        </Col>

        </Row>
        <p style={{fontSize:"30px"}}>A journey of Empress Of The Seas</p>
        <Row className="mb-3">
          <Col md={8}>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Let’s have a quick tour of the Empress of the Seas. Empress of the Seas is a cruise recently owned by India’s famous organization, Cordelia Cruises.</p>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Empress of the seas is not less than a dream come true. Watching this charming cruise is thrilling for each soul. You would definitely fall in love with its beauty and charm.</p>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>When you are on board, you will feel the enthusiasm and elegance within you. There is no limit to the trill that Empress of seas offers you with great meals, stunning activities, and live concerts. Nothing can stop you from enjoying it.</p>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>It serves in India’s elegant ports, such as Chennai, Kochi, Mumbai, Vizag, Mormugao, Lakshadweep, along with the international coast, Sri Lanka.</p>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Based on the video footage and photos, it is seen that the Empress has a massive logo of ‘Cordelia Cruises’ on its hull. You will see the Empress of the sea capturing the Indian ocean in the upcoming months.</p>
          </Col>
          <Col>
          <img src={cruises5} alt="c" style={{ width: "100%" }} />
          </Col>
        </Row>
        <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Empress will give you a lot of memories that you would not manage to forget quickly. Empress will not fail in impressing you at any point. You will witness the eye-catching sunset to the beautiful sunrise while on the cruise tour.</p>
        <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>The Empress of the ship was first ruled by Admiral Cruises and then by the Royal Caribbean International. It entered into the seawater in 1990 as Nordic Express, which was later renamed as the Empress of seas by the Royal Caribbean International.</p>
        <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>After roaming through the San Juan, Bahamas, Puerto Rico, Bermuda route, and South America, the Empress is now ready to cruise the Indian East and West ports, under the direction of Indian Cruise Liners, Cordelia Cruises by Waterways Tourism Pvt Ltd.</p>

        <Row className="mb-5 mt-3">
          <p style={{fontSize:"30px"}}>What will you get when you are onboard?</p>
          <Col md={6}>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Well, you can wake up in the middle of the ocean and enjoy its freshness and rhythmic music. No doubt, Empress of the seas is the most luxurious cruise in India. You will be astonished by its onboard accommodations, delicious food, and a refreshing experience.</p>
          <h3>Why is Empress of the Seas best among other cruises?</h3>
          <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>We knew that you would have this question. Here is the solution for why Cordelia Cruise’s Empress of the Seas is the best among another huge cruise: –</p>
          <ul>

            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Excellent Food – 3 Special Restaurants</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Indian & International cuisines</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>5 Bars and various party zones</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Fitness Centre</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Spa & Salon</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Casino in international waters</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Live Bands and DJ Parties</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Adventure activities</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Theatre</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Swimming Pool</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Nightclub and Lounges</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Luxury cruise experience</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Non-stop Entertainment</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Shopping</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Discos and Party Places</li>
            <li style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Broadway-themed halls with world-class musicians, comedians, and dancers</li>
          </ul>
          </Col>
          <Col>
          <img src={cruises6} alt="c" style={{ width: "100%" }} />

          <p className="mt-3" style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Among all these accommodations and facilities, there are some extra services you can use. However, these additional services are categorized into two basic types, viz., inclusive services, and exclusive services. Exclusive services are based on your expenses. Have a glance at both:</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <p style={{fontSize:"30px"}}>Onboarding price on Cordelia Cruises</p>
          <Col md={8}>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>If you were eagerly waiting for a fun family holiday, this is the best time for it. Surprise your family with a holiday plan like never before. Take them to a new world of amusement on the cruise.</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>We assure you that these bunches of amazing provisions by Cordelia cruise will be one of your most comfortable journeys. Wait, are you pondering upon the Cordelia Cruise prices?</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>Well, you are thinking in the right place. However, luxury is not so cheap. But, you will be happy to know that the price for the tour will not put so much of a burden on your pocket. The Empress is offering so many facilities to you, for which the fare, for your tour, is justifying. Also, the price depends on your boarding and destination point, which may differ.</p>
            <p style={{color:" rgb(127, 126, 126)",fontSize:"smaller"}}>So, if you are also willing to spend some quality time with your family and loved ones and want them to enjoy leaving the pandemic situation behind, do book the tour. This journey will be unforgettable for you and your family.</p>
          </Col>
          <Col>
          <img src={cruises7} alt="c" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Cruises;
