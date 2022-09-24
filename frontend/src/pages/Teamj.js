import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Teamj = ({ user }) => {
  const navigate = useNavigate();
  const [teamName,setTeamName] = React.useState('');

  

  useEffect(() => {
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
        teamName: teamName,
        
    };

    try {
      const request = await fetch('http://localhost:8080/Api/v1/TeamDeatils/register', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyValue),
        
      });

      const data = await request.json();

      alert(data.message);
      navigate('/teams');
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
      <h1 style={{ color: "white" }} className='text-center'>Join To Team! </h1>
      <form onSubmit={formSubmit}>
        
        

        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='Input' className='form-label'>
          Name of Team:
          </label>
          <input
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            type='text'
            className='form-control'
            id='InputTeamName'
          />
        </div>


        
        <button type='submit' className='btn btn-primary w-100'>
          Submit
          
        </button>
      </form>

    </div>
  );
};

export default Teamj;
