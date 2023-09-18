import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { logOut } from '../../redux/auth/logoutSlice';
import './home.css';

function Home() {
  useEffect(() => {
    const handleAnimationIteration = (event) => {
      const animatedElement = event.target;
      const isPaused = animatedElement.dataset.paused === 'true';

      if (!isPaused) {
        animatedElement.style.animationPlayState = 'paused';

        setTimeout(() => {
          animatedElement.style.animationPlayState = 'running';
          animatedElement.dataset.paused = 'false';
        }, 2000);
      }
    };

    const animatedElements = document.querySelectorAll('.animation-element');

    animatedElements.forEach((element) => {
      element.addEventListener('animationiteration', handleAnimationIteration);
    });

    return () => {
      animatedElements.forEach((element) => {
        element.removeEventListener('animationiteration', handleAnimationIteration);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <div className="heading">
        <h1>Better solution For Your Business</h1>
        <p className="text">We are a team of talented designers making websites with Bootstrap</p>
        <button className="button" type="button">Get Started</button>
      </div>
      <img className="animation-element second" data-paused="false" src="../../images/img2.png" alt="Car" />
      <img className="animation-element third" data-paused="false" src="../../images/img3.png" alt="Car" />
      <img className="animation-element first" data-paused="false" id="first" src="../../images/img1.png" alt="Car" />
    </div>
  );
}

export default Home;
