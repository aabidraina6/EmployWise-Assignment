import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Pagination,
} from '@mui/material';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const fetchUsers = async (page) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
            setUsers(response.data.data);
            setTotalPages(response.data.total_pages);
        } catch (err) {
            console.error('Failed to fetch users', err);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setUsers(users.filter((user) => user.id !== id));
        } catch (err) {
            console.error('Failed to delete user', err);
        }
    };

    const handleEdit = (id) => {
        navigate(`/users/edit/${id}`);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                User List
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{ marginBottom: 2 }}
            >
                Logout
            </Button>
            <Box>
                {users.map((user) => (
                    <Card
                        key={user.id}
                        sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, padding: 2 }}
                    >
                        <CardMedia
                            component="img"
                            sx={{ width: 80, height: 80, borderRadius: '50%', marginRight: 2 }}
                            image={user.avatar}
                            alt={user.first_name}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
                            <Typography color="text.secondary">{user.email}</Typography>
                        </CardContent>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => handleEdit(user.id)}
                            sx={{ marginRight: 1 }}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => deleteUser(user.id)}
                        >
                            Delete
                        </Button>
                    </Card>
                ))}
            </Box>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                sx={{ marginTop: 2 }}
                color="primary"
            />
        </Box>
    );
};

export default UserList;
