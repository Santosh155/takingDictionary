import {
    withRouter,
    Link,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import EditProfile from './EditProfile';

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

    const { path, url } = useRouteMatch();
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
            <ul>
                <li>
                    <Link to={`${url}/editprofile`}>Edit Profile</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/editprofile`} component={EditProfile} />
            </Switch>
        </div>
    );
};

export default withRouter(Dashboard);
