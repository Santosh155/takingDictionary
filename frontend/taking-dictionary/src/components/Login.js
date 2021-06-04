import { useState } from 'react';
import Axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Login = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/v1/login', {
            email: email,
            password: password,
        })
            .then((response) => {
                console.log(response.data.token);
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
        </div>
    );
};

export default Login;
