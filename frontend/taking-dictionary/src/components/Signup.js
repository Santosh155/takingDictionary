import { useState } from 'react';
import Axios from 'axios';
import Validation from './Validation';

const Signup = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
    });
    const handleChoice = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const Register = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        Axios.post('http://localhost:5000/api/v1/register', {
            name: values.name,
            email: values.email,
            password: values.password,
            address: values.address,
        })
            .then((response) => {
                console.log(response.json());
                window.location.assign('/login');
            })
            .catch((err) => {
                // setErrors(err.response.data.message);
                console.log(err.response.data.message);
            });
    };
    const tokenFromStorage = JSON.parse(localStorage.getItem('token'));
    if (tokenFromStorage !== null && tokenFromStorage.length >= 10) {
        return window.location.assign('/profile');
    }
    return (
        <div className="container" style={{ width: '40%', marginTop: '40px' }}>
            {/* {error ? (
                <p className="alert alert-danger" role="alert">
                    {error}
                </p>
            ) : null} */}
            <form onSubmit={Register}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleChoice}
                        name="name"
                    />
                </div>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <div className="mb-3">
                    <label className="form-label">Current Address</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleChoice}
                        name="address"
                    />
                </div>
                {errors.address && (
                    <p style={{ color: 'red' }}>{errors.address}</p>
                )}
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={handleChoice}
                        name="email"
                    />
                </div>
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={handleChoice}
                        name="password"
                    />
                </div>
                {errors.password && (
                    <p style={{ color: 'red' }}>{errors.password}</p>
                )}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
