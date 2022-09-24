import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role !== 'ADMIN') {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='container text-center'>
      <h1>Admin Dashboard !</h1>
    </div>
  );
};

export default Admin;
