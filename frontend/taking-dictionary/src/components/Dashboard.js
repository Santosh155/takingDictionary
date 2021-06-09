import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Dashboard = () => {
    const apiUrl = 'http://localhost:5000/api/v1/dictionary/user';
    const [user, setUser] = useState([]);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token,
        };
        Axios.get(apiUrl, { headers })
            .then((response) => {
                setUser(response.data.message);
                console.log(response.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            {user[1]}
            <h1>this is user dashboard</h1>
        </div>
    );
};

export default withRouter(Dashboard);
