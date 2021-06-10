import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Dashboard = () => {
    const apiUrl = 'http://localhost:5000/api/v1/user';
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token,
        };
        Axios.get(apiUrl, { headers })
            .then((response) => {
                setUser(response.data.message);
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    }, []);
    return (
        <div className="container mt-5 mb-5">
            {error ? (
                <p className="alert alert-danger" role="alert">
                    {error}
                </p>
            ) : null}
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
        </div>
    );
};

export default withRouter(Dashboard);
