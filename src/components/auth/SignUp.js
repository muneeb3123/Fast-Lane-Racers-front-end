import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { currentUser } from '../../redux/auth/currentUserSlice';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUser } = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (isUser) {
      toast.error('You are already logged in');
      navigate('/');
    }
  }, [isUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    try {
      const response = await axios.post('http://127.0.0.1:3000/signup', {
        user: formData,
      });
      toast.success(response.data.message);
      localStorage.setItem('token', response.headers.authorization);
      dispatch(currentUser());
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isUser}</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignUp;
