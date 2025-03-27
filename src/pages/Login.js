import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // To navigate between pages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    console.log('Login Data:', formData);
    alert('Login Successful!');
    navigate('/'); // Example route after login
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to Sign Up page
  };

  const handleBack = () => {
    navigate(-1); // Go to the previous page
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">Login</Typography>
          
          {error && <Typography color="error" mb={2}>{error}</Typography>}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </form>

          {/* Sign Up Section */}
          <Typography mt={2} textAlign="center">Don't have an account?</Typography>
          <Button 
            variant="outlined" 
            color="secondary" 
            fullWidth 
            sx={{ mt: 1 }} 
            onClick={handleSignUp}
          >
            Sign Up
          </Button>

          {/* Back Button */}
          <Button 
            variant="text" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2 }} 
            onClick={handleBack}
          >
            Back
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
