import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
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
    border-color: #ff9a9e;
    outline: none;
    box-shadow: 0 0 8px rgba(255, 154, 158, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ff9a9e;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #ff7e79;
  }
`;

const Link = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;

  a {
    color: #ff9a9e;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;

    &:hover {
      color: #ff7e79;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
`;

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    if (!form.name || !form.email || !form.password) {
      setError('All fields are required');
      return;
    }
    try {
      const { data } = await axios.post('/api/auth/register', form);
      alert('Signup successful');
      console.log(data);
    } catch (err) {
      setError(err.response.data.message || 'Signup failed');
    }
  };

  return (
    <SignupContainer>
      <FormWrapper>
        <Title>Sign Up</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
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
          <Button type="submit">Sign Up</Button>
        </form>
        <Link>
          Already have an account? <a href="/signin">Sign In</a>
        </Link>
      </FormWrapper>
    </SignupContainer>
  );
};

export default Signup;
