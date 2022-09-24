import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Team = ({ user }) => {
  const navigate = useNavigate();
  const [name,setName] = React.useState('');
  const [nickName,setNickName] = React.useState('');
  const [teamGame,setTeamGame] = React.useState('');
  


  useEffect(() => {
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
        name: name,
        nickName: nickName,
        teamGame: teamGame,
        
    };

    try {
      const request = await fetch('http://localhost:8080/Api/v1/Team/Register', {
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
      <h1 style={{ color: "white" }} className='text-center'>Team Form !</h1>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='Input' className='form-label'>
            Name
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
          <label style={{ color: "white" }} htmlFor='Input' className='form-label'>
          Nick Name
          </label>
          <input
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            type='text'
            className='form-control'
            id='InputNickName'
          />
        </div>


        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='Input' className='form-label'>
          Team Game
          </label>
          <input
            value={teamGame}
            onChange={(e) => setTeamGame(e.target.value)}
            type='text'
            className='form-control'
            id='InputTeamGame'
          />
        </div>
        
        <button type='submit' className='btn btn-primary w-100'>
          Submit
          
        </button>
      </form>

    </div>
  );
};

export default Team;
