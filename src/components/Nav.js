import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const auth= localStorage.getItem('user');
    
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/signup');
      };
  return (
    <div>
      { auth ?
      <ul className='nav-ul '>
        <li><Link to='/product'>Products</Link></li>
        <li><Link to='/addproduct'>Add Products</Link></li>
        
        <li> <Link onClick={handleLogout} to='/'>Logout </Link></li>
       
      </ul>
      :
      <ul className='nav-ul nav-right'>
         <li ><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
}
    </div>
  );
};

export default Nav;