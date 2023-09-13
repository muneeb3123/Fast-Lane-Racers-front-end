import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';

const CardCar = ({ name, description, image, color }) => {
  const backColor = {
    backgroundColor: `var(--${color})`,
  };
  
return (
  <section className='card-container'>
    <Link href='/' className='circle-image' style={backColor}>
      <img src={`../images/${image}`} alt={name} className='image-over' />
    </Link>
    <h2>{name}</h2>
    <hr className='line-doted' />
    <p>{description}</p>
    <div className='social-buttons'>
      <a href='www.facebook.com' className='social-button' target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt='facebook logo'/>
      </a>
      <a href='www.teitter.com' className='social-button' target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt='twitter logo'/>
      </a>
      <a href='www.instagram.com' className='social-button' target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt='instagram logo'/>
      </a>
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
