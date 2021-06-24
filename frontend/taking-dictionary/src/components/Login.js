import { useState, useEffect } from 'react';
import Axios from 'axios';
import GoogleLogin from './GoogleLogin';
import FacebookLogin from 'react-facebook-login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState(() => {
        const localData = localStorage.getItem('token');
        return localData ? JSON.parse(localData) : '';
    });
    const [isLoggedIn, setLogin] = useState(false);

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);
    const Login = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/v1/login', {
            email: email,
            password: password,
        })
            .then((response) => {
                setToken(response.data.token);
                setLogin(true);
                window.location.assign('/profile');
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };
    if (isLoggedIn) {
        console.log('Redirecting..');
        return window.location.assign('/profile');
    }

    const responseFacebook = (response) => {
        console.log(response);
        Axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/facebooklogin',
            data: {
                accessToken: response.accessToken,
                userID: response.userID,
            },
        })
            .then((result) => {
                setToken(result.data.token);
                setLogin(true);
                window.location.assign('/profile');
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };
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
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
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
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <GoogleLogin />
            <FacebookLogin
                appId="993868381428713"
                autoLoad={false}
                callback={responseFacebook}
            />
        </div>
    );
};

export default Login;
