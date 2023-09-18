import React from 'react';
import './AddNewCar.css';

export default function AddNewCar() {
  return (
    <section className="add-new-car-page">
      <h1 className="add-new-car-heading">Add New Car</h1>

      <form className="add-new-car-form">
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Finance Fee" />
        <input type="number" placeholder="Option To Purchase Fee" />
        <input type="number" placeholder="Total Amount Payable" />
        <input type="text" placeholder="Duration" />
        <input type="number" placeholder="APR" step={0.01} />
        <input type="text" placeholder="Image Link" />
        <input type="textarea" placeholder="Description" className="description" />
        <button type="submit">Add New Car</button>
      </form>
    </section>
  );
}
