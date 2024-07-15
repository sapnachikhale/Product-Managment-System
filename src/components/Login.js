import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/product');
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault(); 
    try {
      let result = await fetch('http://localhost:5011/login', {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      result = await result.json();
      console.log('Login response:', result);

      if (result) {
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.auth); // No need to stringify the token
        navigate('/product');
      } else {
        alert('Enter correct details');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong, please try again later');
    }
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 image-container">
          <img src="https://st3.depositphotos.com/13193658/32815/i/450/depositphotos_328159234-stock-photo-toy-gift-boxes-credit-card.jpg" alt="Login" className="img-fluid" />
        </div>
        <div className="col-md-6 form-wrapper ">
          <form >
            <h3>Login</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input style={{border:"1px solid skyblue"}} onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input style={{border:"1px solid skyblue"}} onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" autoComplete="password" />
            </div>
            <button onClick={handleLogin} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
