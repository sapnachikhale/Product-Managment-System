import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Private = () => {
  const auth = localStorage.getItem('user');
  // Replace with your authentication logic
  return auth? <Outlet />:<Navigate to="/signup" replace/>;
}

export default Private;
