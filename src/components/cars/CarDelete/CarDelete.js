import React, { useEffect } from 'react';
import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper as SwiperDel, SwiperSlide as SwiperSlideDel } from 'swiper/react';
import { fetchAllCars } from '../../../redux/cars/CarsIndexSlice';
import CardDelete from './CardDelete';

const CarDelete = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const displayAllCarsArray = useSelector((store) => (store.allCarsReducer.allCarsArray));

  const hasCars = displayAllCarsArray.length > 0;

  return (
    <SwiperDel
      className="container-index"
      modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
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
            <SwiperSlideDel>
              <CardDelete
                name={car.name}
                image={car.image}
                id={car.id}
                color={car.color}
              />
            </SwiperSlideDel>
          </div>
        ))
      ) : (
        <div>No cars to display</div>
      )}
      <section slot="container-start" className="slot-start">
        <h1 className="index-title">List of Cars</h1>
        <p className="header-instruction">Please Select a Car to delete</p>
        <hr className="line-doted" />
      </section>
    </SwiperDel>

  );
};

export default CarDelete;