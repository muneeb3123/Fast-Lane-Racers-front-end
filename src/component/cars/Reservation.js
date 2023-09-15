import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './Card.css';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
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
    <div className='car-page'>
      <div className='left-part' >
        <h1>i am left</h1>
      </div>
      <div className='center-part'>
        <div className='header'>
      <h1>Latest models</h1>
      <p className='header-instruction'>Please Select a Car Model</p>
      <hr className='line-doted' />
      </div>
      <Swiper
        className='swiper-container'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={0}
        slidesPerView={3}
        breakpoints={{
          1400: { slidesPerView: 3},
          900: { slidesPerView: 2},
          500: { slidesPerView: 1}
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
        {/* <div className='button-prev-slide'><IoIosArrowBack /></div>
        <div className='button-next-slide'><IoIosArrowForward /></div> */}
      </Swiper>
      </div>
    </div>
  );
}

export default Reservation;
