import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SigninContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

const FormWrapper = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 360px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
  transition: 0.2s ease;
  
  &:focus {
    border-color: #667eea;
    outline: none;
    box-shadow: 0 0 8px rgba(102, 126, 234, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #667eea;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #5a67d8;
  }
`;

const Link = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: #5a67d8;
    }
  }
`;

const Signin = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', data.token);
      alert('Logged in successfully');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <SigninContainer>
      <FormWrapper>
        <Title>Sign In</Title>
        <form onSubmit={handleSubmit}>
          <Input 
            name="email" 
            type="email" 
            placeholder="Email" 
            value={form.email} 
            onChange={handleChange} 
          />
          <Input 
            name="password" 
            type="password" 
            placeholder="Password" 
            value={form.password} 
            onChange={handleChange} 
          />
          <Button type="submit">Sign In</Button>
        </form>
        <Link>
          Don't have an account? <a href="/signup">Sign Up</a>
        </Link>
      </FormWrapper>
    </SigninContainer>
  );
};

export default Signin;
