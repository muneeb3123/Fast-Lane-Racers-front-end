import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { Link } from 'react-router-dom';
import { currentUser } from '../../redux/auth/currentUserSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isUser } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUser) {
      toast.error('You are already logged in');
      navigate('/');
    }
  }, [isUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const response = await axios.post('http://127.0.0.1:3000/login', {
        user: formData,
      });
      localStorage.setItem('token', response.headers.authorization);
      toast.success(response.data.message);
      dispatch(currentUser());
    } catch (error) {
      setError(error.response.data.message);
      setPassword('');
      // toast.error(error.response.data.message);
    }
  };

  return (
    <div className="login-main">
      <div className="login-background">
        <div className="inf-wrap">
          <h4 style={{ color: '#fff' }}>Journey Beyond</h4>
          <p style={{ color: '#fff' }}>Explore the new Ferrari lineup.</p>
          <Link to="/cars">Explore</Link>
        </div>
      </div>
      <div className="form-container">
        <p className="form-logo" style={{ color: '#fff' }}>Ferrari</p>
        <div className="form-wrapper">
          <h1 className="login-title" style={{ color: '#fff' }}>PLEASE LOG IN</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required="true" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required="true" />
            <p className="invalid-credentials" style={{ color: 'red' }}>{error}</p>
            <button type="submit">Login</button>
          </form>
          <div className="login-bottom">
            <p className="bottom-info" style={{ color: '#fff' }}>Dont have an account?</p>
            <Link to="/signup" className="link-to-signup" style={{ color: 'red' }}>Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
