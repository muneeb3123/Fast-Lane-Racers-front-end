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
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:3000/signup', {
        user: formData,
      });
      toast.success(response.data.message);
      localStorage.setItem('token', response.headers.authorization);
      dispatch(currentUser());
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        toast.error(error.response.data.errors[0]);
      } else {
        toast.error('An error occurred');
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-bg">
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit}>
        <h1>{isUser}</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
