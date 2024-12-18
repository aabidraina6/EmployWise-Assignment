import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                const { first_name, last_name, email } = response.data.data;
                setFormData({ first_name, last_name, email });
            } catch (err) {
                console.error('Failed to fetch user details');
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("here")
            const res = await axios.put(`https://reqres.in/api/users/${id}`, formData);
            console.log(res)
            navigate('/users');
        } catch (err) {
            console.error('Failed to update user');
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 500,
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
                Edit User
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </form>
        </Box>
    );
};

export default EditUser;
