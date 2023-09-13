import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../redux/auth/currentUserSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Login;
