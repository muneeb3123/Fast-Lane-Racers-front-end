import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import data from '../json/api.json';

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
    <div>
      <h1>Reservation</h1>
      <Swiper
        className='swiper-container'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => { }}
        onSwiper={(swiper) => swiper.clickedIndex}
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
      </Swiper>
    </div>
  );
}

export default Reservation;
