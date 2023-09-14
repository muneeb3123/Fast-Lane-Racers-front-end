import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom/';
import { fetchSpecificCar } from '../../redux/cars/CarShowSlice';

export default function CarShow() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { carID } = location.state;

  useEffect(() => {
    dispatch((fetchSpecificCar(carID)));
  }, [dispatch, carID]);

  const displaySpecificCarArray = useSelector((store) => store.specificCarReducer.specificCarArray);

  return (
    <>
      <div>CarsShow</div>
      {displaySpecificCarArray.map((car) => (
        <div key={car.id}>
          {car.name}
        </div>
      ))}
    </>
  );
}
