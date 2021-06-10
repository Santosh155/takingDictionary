import { useState } from 'react';
import Axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState('');
    const [error, setError] = useState('');

    const contact = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/v1/contact', {
            name: name,
            email: email,
            message: message,
        })
            .then((response) => {
                setShowMessage(response.data.message);
            })
            .catch((err) => {
                setError(err.response.data.message)
                console.log(err);
            });
    };
    return (
        <div className="container" style={{ marginTop: '40px', width: '50%' }}>
            {showMessage ? (
                <p className="alert alert-primary" role="alert">
                    {showMessage}
                </p>
            ) : null}
            {error ? (
                <p className="alert alert-primary" role="alert">
                    {error}
                </p>
            ) : null}
            <form method="post" onSubmit={contact}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        required
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">email</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label>Message</label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        required
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
