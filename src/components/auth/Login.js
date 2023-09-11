import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.signup.user);
  console.log(user);

  const handleSubmit = () => {
    console.log('hy');
  };
  return (
    <>
      {user ? (
        <p>
          Welcome,
          {user.user.name}
          !
        </p>
      ) : (
        <p>Please log in or sign up.</p>
      )}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Login;
