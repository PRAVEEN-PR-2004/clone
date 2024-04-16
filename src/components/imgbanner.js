import React from 'react';
import holidaysImage from "../assets/holidays.jpeg";

const ImgBanner = () => {
  return (
    <div style={{ margin: '1.5%' }}> {/* Add margin to the outer div */}
      <img src={holidaysImage} alt="Holidays Banner" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ImgBanner;
