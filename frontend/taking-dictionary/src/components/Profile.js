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
            {/* <form>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                        value={user.name}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Current Address</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        // onChange={(e) => {
                        //     setAddress(e.target.value);
                        // }}
                        // value={user.address}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        // onChange={(e) => {
                        //     setEmail(e.target.value);
                        // }}
                        // value={user.email}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        // onChange={(e) => {
                        //     setPassword(e.target.value);
                        // }}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form> */}
        </div>
    );
};

export default withRouter(Dashboard);
