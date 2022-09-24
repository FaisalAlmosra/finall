import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + btoa(username + ':' + password),
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
      });
      console.log(request);
      for(let entry of request.headers.keys()) {
        console.log('header', entry);
      }
      const data = await request.json();
      if (request.status === 200) {
        localStorage.setItem('loggedIn', true);
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (e) {
      alert('Server error');
      console.log(e);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      navigate('/');
    }
  }, []);

  return (
    <div className='container'>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h1 style={{ color: "white" }} className='text-center'>Login Form !</h1>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='InputUsername' className='form-label'>
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            className='form-control'
            id='exampleInputUsername'
          />
        </div>
        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='exampleInputPassword' className='form-label'>
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            id='exampleInputPassword'
          />
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Login
        </button>
      </form>
      
      <Link to='/Register'>Register</Link>
    </div>
  );
};

export default Login;
