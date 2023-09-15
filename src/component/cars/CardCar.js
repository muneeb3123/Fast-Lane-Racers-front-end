import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css'

const CardCar = ({ name, description, image, color }) => {
  const backColor = {
    backgroundColor: `var(--${color})`,
  };
  
return (
  <section className='card-container'>
    <div className='image'>
      <Link to={`/details/${name}`} className='circle-image' style={backColor}>
        <img src={`./images/${image}`} alt={name} className='image-over' />
      </Link>
    </div>
    <div className='details'>
    <h2>{name}</h2>
    <hr className='line-doted' />
    <p className='description' >{description}</p>
    <div className='social-buttons'>
      <a href='www.facebook.com' className='social-button' target="_blank" rel="noopener noreferrer">
        <img src='./images/facebook.svg' alt='facebook logo'/>
      </a>
      <a href='www.twitter.com' className='social-button' target="_blank" rel="noopener noreferrer">
        <img src='./images/twitter.svg' alt='twitter logo'/>
      </a>
      <a href='www.instagram.com' className='social-button' target="_blank" rel="noopener noreferrer">
        <img src='./images/instagram.svg' alt='instagram logo'/>
      </a>
      </div>
    </div>
  </section>
)}

CardCar.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default CardCar
