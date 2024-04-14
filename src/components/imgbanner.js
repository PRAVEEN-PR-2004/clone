import React from 'react';
import holidaysImage from "../assets/holidays.jpeg";

const ImgBanner = () => {
  return (
    <div className="container">
      <img src={holidaysImage} alt="Holidays Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ImgBanner;
