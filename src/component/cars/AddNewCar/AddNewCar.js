import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCar } from '../../../redux/cars/AddNewCarSlice';
import './AddNewCar.css';

export default function AddNewCar() {
  const dispatch = useDispatch();
  const [carData, setCarData] = useState({
    name: '',
    finance_fee: 0,
    option_to_purchase_fee: 0,
    total_amount_payable: 0,
    duration: '',
    apr: 0.0,
    image: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewCar(carData))
      .unwrap()
      .then(() => {
        // Handle success, e.g., show a success message or redirect
        console.log('New car added successfully');
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error('Error adding new car:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="add-new-car-page">
      <h1 className="add-new-car-heading">Add New Car</h1>

      <form className="add-new-car-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="number" name="finance_fee" placeholder="Finance Fee" onChange={handleChange} />
        <input type="number" name="option_to_purchase_fee" placeholder="Option To Purchase Fee" onChange={handleChange} />
        <input type="number" name="total_amount_payable" placeholder="Total Amount Payable" onChange={handleChange} />
        <input type="text" name="duration" placeholder="Duration" onChange={handleChange} />
        <input type="number" name="apr" placeholder="APR" step={0.01} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image Link" onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Description"
          className="description"
          onChange={handleChange}
        />
        <button type="submit">Add New Car</button>
      </form>
    </section>
  );
}
