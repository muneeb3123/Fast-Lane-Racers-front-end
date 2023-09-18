import React from 'react';

export default function AddNewCar() {
  return (
    <section className="add-new-car-page">
      <h1>AddNewCar</h1>

      <form>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Finance Fee" />
        <input type="number" placeholder="Option To Purchase Fee" />
        <input type="number" placeholder="Total Amount Payable" />
        <input type="text" placeholder="Duration" />
        <input type="number" placeholder="APR" step={0.01} />
        <input type="text" placeholder="Image Link" />
        <input type="textarea" placeholder="Description" />
        <button type="submit">Add New Car</button>
      </form>
    </section>
  );
}
