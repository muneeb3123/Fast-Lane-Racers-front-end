import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../redux/auth/signupSlice';

function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    dispatch(createUser(formData));
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Registration;
