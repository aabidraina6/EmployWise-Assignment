import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(!email || !password) {
                setError('Please enter email and password');
                return;
            }
            if(email !== 'eve.holt@reqres.in' || password !== 'cityslicka') {
                setError('Invalid credentials');
                return;
            }
            const response = await axios.post('https://reqres.in/api/login', {
                email,
                password,
            });
            console.log(email , password)
            localStorage.setItem('token', response.data.token);
            console.log(response)
            if(response.status === 200)
            navigate('/users');
            else 
            setError('Invalid credentials');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                margin: 'auto',
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                boxShadow: 3,
                borderRadius: 2,
                marginTop: 5,
            }}
        >
            <Typography variant="h5" gutterBottom>
                Login
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                >
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
