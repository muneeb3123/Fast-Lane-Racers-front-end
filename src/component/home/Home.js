import React from 'react';
import {
  Pagination, A11y, Autoplay, EffectFade, Navigation,
} from 'swiper/modules';

import { Swiper as SwiperHome, SwiperSlide as SwiperSlideHome } from 'swiper/react';
import './home.css';

import 'swiper/css/bundle';
// import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// // import 'swiper/css/effect-fade';
// // import 'swiper/css/pagination';

import img3 from '../../images/img2.webp';
import img1 from '../../images/img3.webp';
import img2 from '../../images/home2.png';
import img4 from '../../images/img4.webp';

function Home() {
  return (
    // <div>
    <SwiperHome
      modules={[Pagination, Navigation, A11y, Autoplay, EffectFade]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      effect="fade"
      loop
      allowTouchMove={false}
    >
      <SwiperSlideHome style={{
        backgroundImage: `url(${img3})`,
        backgroundColor: '#950602',
        width: '100%',
        height: '100vh',
      }}
      >
        <div className="content-home">
          <div className="header-link">
            <p className="home-header">Ferrari 488</p>
            <div className="underline" />
            <p className="text">
              Ferrari, a symbol of speed and style, roars with Italian passion on every road
            </p>
            <button
              className="button"
              type="button"
              style={{ backgroundColor: 'yellowgreen' }}
            >
              Learn more
            </button>
          </div>
        </div>
      </SwiperSlideHome>
      <SwiperSlideHome style={{
        backgroundImage: `url(${img1})`,
        backgroundColor: 'green',
        width: '100%',
        height: '100vh',
      }}
      >
        <div className="content">
          <div className="header-link">
            <p className="home-header">Ferrari 488</p>
            <div className="underline" />
            <p className="text">
              It boasts a 660 horsepower 3.9-liter V8 engine with twin turbochargers.
            </p>
            <button
              className="button"
              type="button"
              style={{ backgroundColor: 'red' }}
            >
              Learn more
            </button>
          </div>
        </div>
      </SwiperSlideHome>
      <SwiperSlideHome style={{
        backgroundImage: `url(${img2})`,
        backgroundColor: 'blue',
        width: '100%',
        height: '100vh',
      }}
      >
        <div className="content">
          <div className="header-link">
            <p className="home-header">Ferrari 488</p>
            <div className="underline" />
            <p className="text">
              Advanced aerodynamics and technology enhance its handling and versatility.
            </p>
            <button
              className="button"
              type="button"
              style={{ backgroundColor: '#FFA500 ' }}
            >
              Learn more
            </button>
          </div>
        </div>
      </SwiperSlideHome>
      <SwiperSlideHome style={{
        // backgroundImage: `url(${img4})`,
        // background: 'no-repeat center center fixed',
        // backgroundSize: '100vh',
        backgroundColor: 'purple',
        // width: '100vw',
        height: '100vh',
        // backgroundPosition: '120% 37%',
      }}
      >
        <div className="content-home">
          <div className="header-link">
            <p className="home-header">Ferrari 488</p>
            <div className="underline" />
            <p className="text">
              The Ferrari 488 is a high-performance sports car known for its stunning design
            </p>
            <button className="button" type="button" style={{ backgroundColor: 'yellowgreen' }}>Learn more</button>
          </div>
          <img src={img4} alt="car" className="car-home" />
        </div>
      </SwiperSlideHome>
    </SwiperHome>
    // </div>
  );
}

export default Home;
