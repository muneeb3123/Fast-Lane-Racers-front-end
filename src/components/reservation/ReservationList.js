import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import { getReservation } from '../../redux/reservation/reservationSlice';
import ReservationItem from './ReservationItem';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { isUser } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const reservation = useSelector(
    (state) => state.reservations.reservationList,
  );

  const hasReservation = reservation.length > 0;

  useEffect(() => {
    if (!isUser) {
      navigate('/login');
    }
  }, [isUser, navigate]);

  useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);

  return (
    <div className="main">
      <Swiper
        modules={[EffectFade, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {hasReservation ? (
          reservation.map((reservation) => (
            <SwiperSlide key={reservation.id}>
              <ReservationItem reservation={reservation} />
            </SwiperSlide>
          ))
        ) : (
          <div className="no-reservation">There are no reservations</div>
        )}
      </Swiper>
    </div>
  );
};

export default ReservationList;
