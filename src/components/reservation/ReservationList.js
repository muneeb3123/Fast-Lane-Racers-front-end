import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservation } from '../../redux/reservation/reservationSlice';
import ReservationItem from './ReservationItem';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservation = useSelector(
    (state) => state.reservations.reservationList,
  );

  useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);

  return (
    <div className="main">
      <h1>My Reservation</h1>
      <>
        {reservation.map((reservation) => (
          <ReservationItem key={reservation.id} reservation={reservation} />
        ))}
      </>
    </div>
  );
};

export default ReservationList;
