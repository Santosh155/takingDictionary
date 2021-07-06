import { useState, useEffect } from 'react';
import Axios from 'axios';
import LoginFromGoogle from './GoogleLogin';
import LoginFromFacebook from './FacebookLogin';

const Login = () => {
    const [error, setError] = useState('');
    const [token, setToken] = useState(() => {
        const localData = localStorage.getItem('token');
        return localData ? JSON.parse(localData) : '';
    });
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);
    const Login = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/v1/login', {
            email: values.email,
            password: values.password,
        })
            .then((response) => {
                setToken(response.data.token);
                window.location.assign('/profile');
            })
            .catch((err) => {
                setError(err.response.data.message);
                console.log(err);
            });
    };
    const tokenFromStorage = JSON.parse(localStorage.getItem('token'));
    if (tokenFromStorage !== null && tokenFromStorage.length >= 10) {
        return window.location.assign('/profile');
    }

    return (
        <div className="container" style={{ width: '40%', marginTop: '40px' }}>
            {error ? (
                <p className="alert alert-danger" role="alert">
                    {error}
                </p>
            ) : null}
            <form onSubmit={Login}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        onChange={handleChange}
                        name="email"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={handleChange}
                        required
                        name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <LoginFromGoogle />
            <LoginFromFacebook />
        </div>
    );
};

export default Login;
