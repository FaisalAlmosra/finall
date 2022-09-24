import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Challenge = ({ user }) => {
  const navigate = useNavigate();
  const [name,setName] = React.useState('');
  const [description,setDescription] = React.useState('');


  useEffect(() => {
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
        game: name,
        description: description,
    };

    try {
      const request = await fetch('http://localhost:8080/Api/v1/chl', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyValue),
        
      });

      const data = await request.json();

      alert(data.message);
      navigate('/challenges');
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
      <h1 style={{ color: "white" }} className='text-center'>Challenge Form !</h1>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label style={{ color: "white" }} htmlFor='Input' className='form-label'>
            game
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
          <label style={{ color: "white" }} htmlFor='InputDescription' className='form-label'>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='form-control'
            id='InputDescription'
          />
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Challenge;
