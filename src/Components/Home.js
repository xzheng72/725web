import React from 'react';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';
import Dialog from './Dialog';

const Home = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="home-container">
      <Navbar />
      <Dialog open={open} setOpen={setOpen} />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Make an appointment</h1>
          <p className="primary-text">
            Enter your health condition and details to schedule an appointment.
            Our team will guide you through the next steps for your care.
          </p>
          <button
            className="secondary-button"
            onClick={function () {
              setOpen(true);
            }}
          >
            Share your details
            <FiArrowRight />{' '}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
