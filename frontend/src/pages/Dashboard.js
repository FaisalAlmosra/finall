/* import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const logout = async () => {
    const request = await fetch('http://localhost:8080/api/v1/auth/logout');
    if (request.status === 204) {
      localStorage.removeItem('loggedIn');
      navigate('/login');
    }
  };

  const goToSupport = () =>{
    navigate('/support')
  }

  useEffect(() => {
    const fetchUser = async () => {
      const request = await fetch('http://localhost:8080/api/v1/auth/me',{credentials:'include'});
      const data = await request.json();
      if (request.status === 401) {
        localStorage.removeItem('loggedIn');
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  return (
    <div className='container text-center'>
      <h1>Dashboard !</h1>
      <button onClick={goToSupport} type='button' class='btn btn-primary mt-5 w-100'>
        Support
      </button>
      <button onClick={logout} type='button' class='btn btn-danger mt-5 w-100'>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
*/
