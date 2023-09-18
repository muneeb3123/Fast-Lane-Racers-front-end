import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    <div className="main">
      <h1>Reserve</h1>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddReservation;
