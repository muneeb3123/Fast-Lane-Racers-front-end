import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CarsIndex.css';

const CardCar = (
  {
    name, description, image, color, id,
  },
) => {
  const backColor = {
    backgroundColor: `var(--${color})`,
  };

  return (
    <section className="card-container">
      <div className="image">
        <Link
          to={`/cars/${id}`}
          state={{
            carID: id,
          }}
          className="circle-image"
          style={backColor}
        >
          <img src={image} alt={name} className="image-over" />
        </Link>
      </div>
      <div className="details">
        <h2>{name}</h2>
        <hr className="line-doted" />
        <p className="car-description">{description}</p>
        <div className="social-buttons">
          <a href="https://www.facebook.com" className="social-button" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook.svg" alt="facebook logo" className="social-icon" />
          </a>
          <a href="https://www.twitter.com" className="social-button" target="_blank" rel="noopener noreferrer">
            <img src="./images/twitter.svg" alt="twitter logo" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" className="social-button" target="_blank" rel="noopener noreferrer">
            <img src="./images/instagram.svg" alt="instagram logo" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

CardCar.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardCar;
