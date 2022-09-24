import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const League = ({ user }) => {
  const navigate = useNavigate();
  const [name,setName] = React.useState('');
  const [details,setDetails] = React.useState('');
  const [registerLink,setRegisterLink] = React.useState('');

  
  useEffect(() => {
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
        name: name,
        details: details,
        registerLink: registerLink,

    };

    try {
      const request = await fetch('http://localhost:8080/Api/v1/league/add', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyValue),
        
      });

      const data = await request.json();

      alert(data.message);
      navigate('/leagues');
      }
     catch (e) {
      alert('Server error');
      console.log(e);
    }
  };



  return (
    <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h1 style={{ color: "white" }} className='text-center'>League Form !</h1>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='Input' className='form-label'>
            Name of League
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='form-control'
            id='InputName'
          />
        </div>
        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='Inputdetails' className='form-label'>
            details
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className='form-control'
            id='InputDetails'
          />
        </div>
        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='Input' className='form-label'>
            Register Link
          </label>
          <input
            value={registerLink}
            onChange={(e) => setRegisterLink(e.target.value)}
            type='text'
            className='form-control'
            id='InputRegisterLink'
          />
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default League;
