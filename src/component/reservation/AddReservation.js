import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Reservation.css';
import { addReservation } from '../../redux/reservation/reservationSlice';

const AddReservation = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const carId = useParams();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservation = {
      car_id: Number(carId.id),
      city,
      date,
    };
    dispatch(addReservation(reservation));
    setCity('');
    setDate('');
  };

  return (
    <div className="test">
      <div className="reservation">
        <div className="res-form-section">
          <h3 className="res-form-title">Test Drive</h3>
          <p className="res-form-description">
            Book a test drive today and embrace the excitement of driving with us
            as you experience the thrill and performance of our exceptional
            vehicles firsthand.
          </p>
        </div>
        <form className="res-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="date"
            value={date}
            placeholder="Date"
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setDate(e.target.value)}
          />
          <input type="submit" value="Book Reservation" className="btn-reserve" />
        </form>
      </div>
    </div>
  );
};

export default AddReservation;
