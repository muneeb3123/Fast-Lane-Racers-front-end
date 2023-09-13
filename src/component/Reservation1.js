import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Reservation1() {



  return (
    <Swiper
    direction='vertical'
      // install Swiper modules
      modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
      effect='fade'
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <h1 slot="container-start">Container Start</h1>
      <span slot="container-end">
        <h2>
          Container End
        </h2>
      </span>
    </Swiper>
  );
}

export default Reservation1;
