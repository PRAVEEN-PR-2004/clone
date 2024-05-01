import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ALLPACKAGES } from "./Allpackages";
import { Col, Container, Row } from "react-bootstrap";
import Linkcom from "./Linkcom";
import { FaLocationDot } from "react-icons/fa6";
import { IoFootstepsOutline } from "react-icons/io5";
import { RiSpeakLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { LuClock } from "react-icons/lu";
import Bookform from "./Bookform";
import Random from "./Random";
import Footer from "./Footer";

const FullPackages = () => {
  const { id } = useParams();
  const reqdeltail = ALLPACKAGES.find((pack) => pack.id === parseInt(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Linkcom children={"Packages"} />
      <Container style={{ marginTop: "5%" }}>
        <Row>
          <Col md={8} style={{ height: "100%" }}>
            <h3 style={{ fontFamily: "popins" }}>{reqdeltail.name}</h3>
            <p style={{ fontSize: "14px", ccolor: " #5E6D77" }}>
              <FaLocationDot style={{ color: " #5E6D77" }} />{" "}
              {reqdeltail.location}
            </p>
            <hr></hr>
            <Row>
              <Col lg={12}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "3%",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <LuClock size={40} style={{ color: "#5191fa" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "15px",
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Duration
                      </p>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: "#efa41b",
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "20px",
                        }}
                      >
                        {reqdeltail.day}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "3%",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <IoFootstepsOutline
                        size={40}
                        style={{ color: "#5191fa" }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "15px",
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Tour Tpye
                      </p>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: "#efa41b",
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "20px",
                        }}
                      >
                        Group Tour
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "3%",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <RiSpeakLine size={40} style={{ color: "#5191fa" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "15px",
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Grop Size
                      </p>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: "#efa41b",
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "20px",
                        }}
                      >
                        unlimited
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: "3%",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <GrGroup size={40} style={{ color: "#5191fa" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "15px",
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Language
                      </p>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: "#efa41b",
                          margin: 0,
                          fontSize: "13px",
                          lineHeight: "20px",
                        }}
                      >
                        English
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <img
              src={reqdeltail.Pimage}
              alt="gt"
              style={{ width: "100%", height: "50%", marginTop: "1%" }}
            />
          </Col>
          <Col md={4} className="text-center" style={{ display: "flex" }}>
            <Bookform />
          </Col>
        </Row>
        <hr></hr>

        <h3 className="text-center" style={{ marginTop: "4%" }}>
          You might also like
        </h3>
        <br></br>
        <Random />
      </Container>
      <Footer/>
      
    </>
  );
};

export default FullPackages;
