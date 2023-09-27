import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Pagination, A11y, Autoplay, EffectFade, Navigation,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import img3 from '../../images/img2.webp';
import img1 from '../../images/img3.webp';
import img2 from '../../images/home2.png';
import img4 from '../../images/img4.webp';

import './home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Swiper
        modules={[Pagination, Navigation, A11y, Autoplay, EffectFade]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect="fade"
        loop
        allowTouchMove={false}
      >
        <SwiperSlide style={{ backgroundImage: `url(${img3})`, backgroundColor: '#950602' }}>
          <div className="content">
            <div className="header-link">
              <p className="home-header">Ferrari 488</p>
              <div className="underline" />
              <p className="text">Ferrari, a symbol of speed and style, roars with Italian passion on every road</p>
              <button className="button" type="button" onClick={() => navigate('./cars')} style={{ backgroundColor: 'yellowgreen' }}>Learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${img1})`, backgroundColor: 'green' }}>
          <div className="content">
            <div className="header-link">
              <p className="home-header">Ferrari 488</p>
              <div className="underline" />
              <p className="text">It boasts a 660 horsepower 3.9-liter V8 engine with twin turbochargers.</p>
              <button className="button" type="button" onClick={() => navigate('./cars')} style={{ backgroundColor: 'red' }}>Learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${img2})`, backgroundColor: 'blue' }}>
          <div className="content">
            <div className="header-link">
              <p className="home-header">Ferrari 488</p>
              <div className="underline" />
              <p className="text">Advanced aerodynamics and technology enhance its handling and versatility.</p>
              <button className="button" type="button" onClick={() => navigate('./cars')} style={{ backgroundColor: '#FFA500 ' }}>Learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: `url(${img4})`, backgroundColor: 'purple' }}>
          <div className="content">
            <div className="header-link">
              <p className="home-header">Ferrari 488</p>
              <div className="underline" />
              <p className="text">The Ferrari 488 is a high-performance sports car known for its stunning design</p>
              <button className="button" type="button" onClick={() => navigate('./cars')} style={{ backgroundColor: 'yellowgreen' }}>Learn more</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
