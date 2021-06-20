import { useState, useEffect } from 'react';
import Axios from 'axios';
import { GoogleLogin } from 'react-google-login';

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
    const responseSuccessGoogle = (response) => {
        console.log(response);
        Axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/googlelogin',
            data: { tokenId: response.tokenId },
        }).then((res) => {
            console.log(res);
        });
    };
    const responseErrorGoogle = (response) => {
        console.log('error');
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
            <GoogleLogin
                clientId="771025381810-tbtrkiste2aphi9fd25dol6h6pfvd0vj.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;
