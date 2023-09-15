import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../../redux/cars/CarsIndexSlice';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './CarsIndex.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CarCard from './CarCard';

export default function CarsIndex() {
  // const swiper = useSwiper();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const displayAllCarsArray = useSelector((store) => (store.allCarsReducer.allCarsArray));

  const hasCars = displayAllCarsArray.length > 0;

  return (
    <Swiper
      className="swiper-container"
      modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={0}
      slidesPerView={1}
      breakpoints={{
        1400: { slidesPerView: 3 },
        900: { slidesPerView: 2 },
        500: { slidesPerView: 1 },
      }}
      navigation
      pagination={{ clickable: true }}
    >

      {hasCars ? (
        displayAllCarsArray.map((car) => (
          <div key={car.id}>
            <SwiperSlide>
              <CarCard
                name={car.name}
                description={car.description}
                image={car.image}
                id={car.id}
                color={car.color}
              />
            </SwiperSlide>
          </div>
        ))
      ) : (
        <p>No cars found</p>
      )}
      <section
        slot="container-start"
        style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem',
        }}
      >
        <h1 style={{ fontSize: '2rem' }}>Latest models</h1>
        <p className="header-instruction">Please Select a Car Model</p>
        <hr className="line-doted" />
      </section>
    </Swiper>
  );
}
