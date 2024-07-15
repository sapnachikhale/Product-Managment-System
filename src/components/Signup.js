import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/addproduct');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', name, email, password);

    try {
      const response = await fetch('http://localhost:5011/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      localStorage.setItem('user', JSON.stringify(data));

      if (data) {
        navigate('/addproduct');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return (
    <div className='inputbox'>
      <h1>Register yourself</h1>
      <form onSubmit={handleSubmit}>
        <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter name' autoComplete="name" /></p>
        <p>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' autoComplete="email" /></p>
        <p>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" placeholder='enter password' autoComplete="current-password" /></p>
        <button  type="submit" >Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
