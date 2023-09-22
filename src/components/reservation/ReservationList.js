import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectFade, Pagination, A11y,
} from 'swiper/modules';
import {
  getReservation,
  delReservation,
} from '../../redux/reservation/reservationSlice';
import ReservationItem from './ReservationItem';

const ReservationList = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(0);
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
  }, [reload, dispatch]);

  const handleDelete = (id) => {
    dispatch(delReservation(id));
    const timer = setTimeout(() => {
      setReload((reload) => reload + 1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div className="reservation">
      <Swiper
        modules={[EffectFade, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="res-swiper"
      >
        {hasReservation ? (
          reservation.map((reservation) => (
            <SwiperSlide key={reservation.id}>
              <ReservationItem
                reservation={reservation}
                handleDelete={handleDelete}
              />
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
