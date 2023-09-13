import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from '../../redux/cars/CarsIndexSlice';

export default function CarsIndex() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const displayAllCarsArray = useSelector((store) => (store.allCarsReducer.allCarsArray));
  console.log(displayAllCarsArray);

  return (
    <>
      <div>CarsIndex</div>
      {displayAllCarsArray.map((car) => (
        <div key={car.id}>
          {car.name}
        </div>
      ))}
    </>
  );
}
