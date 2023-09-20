import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteCar, fetchAllCars } from '../../../redux/cars/CarsIndexSlice';
import './CarDelete.css';

const CardDelete = ({
  name, image, color, id,
}) => {
  const dispatch = useDispatch();
  const backColor = {
    backgroundColor: `var(--${color})`,
  };

  const handleClickDelete = () => {
    // eslint-disable-next-line no-alert
    const bolResult = window.confirm(`Are you sure you want to delete ${name}?`);
    if (bolResult) {
      dispatch(deleteCar(id))
        .then((result) => {
          if (result.payload) {
            dispatch(fetchAllCars());
            toast.success(result.payload.message);
          } else {
            toast.error(result.error.message);
          }
        })
        .catch(() => {
          toast.error('Something went wrong');
        });
    }
  };

  return (
    <section className="card-container">
      <figure className="image">
        <div className="circle-image" style={backColor}>
          <img src={image} alt={name} className="image-over" />
        </div>
      </figure>
      <div className="details">
        <h2>{name}</h2>
        <hr className="line-doted" />
        <button type="button" className="reserve-btn" onClick={handleClickDelete}>
          DELETE
        </button>
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

CardDelete.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardDelete;
