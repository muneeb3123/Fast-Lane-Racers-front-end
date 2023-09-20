import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchAllCars } from '../../../redux/cars/CarsIndexSlice';
import './CarsIndex.css';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
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
      className="container-index"
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
      <section slot="container-start" className="slot-start">
        <h1 className="index-title">Latest models</h1>
        <p className="header-instruction">Please Select a Car Model</p>
        <hr className="line-doted" />
      </section>
    </Swiper>
  );
}
