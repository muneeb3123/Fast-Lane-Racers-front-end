import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import './Auth.css';
import { Link } from 'react-router-dom';
import { currentUser } from '../../redux/auth/currentUserSlice';
import { loginUser } from '../../redux/auth/LoginSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isUser } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((store) => store.loginUser);

  useEffect(() => {
    if (isUser) {
      navigate('/');
    }
  }, [isUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(loginUser(formData))
      .then((response) => {
        if (response.payload) {
          toast.success(response.payload.message);
          dispatch(currentUser());
        } else if (response.error) {
          setPassword('');
        }
      });
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
            <input name="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required name="Password" />
            <p className="invalid-credentials" style={{ color: 'red' }}>{error}</p>
            <button className={isLoading ? 'loading-button' : ''} type="submit">Login</button>
          </form>
          <div className="login-bottom">
            <p className="bottom-info" style={{ color: '#fff' }}>Dont have an account?</p>
            <Link to="/signup" className="link-to-signup" style={{ color: 'red' }}>Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
