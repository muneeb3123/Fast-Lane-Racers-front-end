import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper } from 'swiper/react';
import {
  EffectFade,
  Navigation,
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

  useEffect(() => {
    if (!isUser) {
      navigate('/login');
    }
  }, [isUser]);

  useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);

  return (
    <div className="main">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <>
          {reservation.map((reservation) => (
            <ReservationItem key={reservation.id} reservation={reservation} />
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default ReservationList;
