import { useState } from 'react';
import Axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const Register = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/v1/register', {
            name: name,
            email: email,
            password: password,
            address: address,
        }).then((e) => {
            console.log(e);
        });
    };
    return (
        <div className="container" style={{ width: '40%', marginTop: '40px' }}>
            <form onSubmit={Register}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Current Address</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
