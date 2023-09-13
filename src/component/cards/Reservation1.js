import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import React from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './Card.css';
import data from '../../json/api.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardCar from './CardCar';

function Reservation() {
  // const swiper = useSwiper();
  const cars = data.search;
  const hasCars = cars.length > 0;

  return (
    <Swiper
      className='swiper-container'
      modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={0}
      slidesPerView={3}
      breakpoints={{
        1400: { slidesPerView: 3 },
        900: { slidesPerView: 2 },
        500: { slidesPerView: 1 }
      }}
      navigation
      pagination={{ clickable: true }}
    >

      {hasCars ? (
        cars.map((car) => (
          <div key={car.id}>
            <SwiperSlide>
              <CardCar name={car.name} description={car.description} image={car.image} color={car.color} />
            </SwiperSlide>
          </div>
        ))
      ) : (
        <p>No cars found</p>
      )}
      <section slot="container-start" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "1rem"} } >
        <h1 style={{fontSize: "2rem"}}>Latest models</h1>
        <p className='header-instruction'>Please Select a Car Model</p>
        <hr className='line-doted' />
      </section>
    </Swiper>
  );
}

export default Reservation;
