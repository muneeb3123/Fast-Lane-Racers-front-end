import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCars } from '../../redux/cars/CarsIndexSlice';

export default function CarsIndex() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const displayAllCarsArray = useSelector((store) => (store.allCarsReducer.allCarsArray));

  return (
    <>
      <div>CarsIndex</div>
      {displayAllCarsArray.map((car) => (
        <Link
          to={`/cars/${car.id}`}
          key={car.id}
          state={{
            carID: car.id,
          }}
        >
          {car.name}
        </Link>
      ))}
    </>
  );
}
