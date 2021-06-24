import { useState, useEffect } from 'react';
import Axios from 'axios';
import FacebookLogin from 'react-facebook-login';

const LoginFromFacebook = () => {
    const [error, setError] = useState('');
    const [token, setToken] = useState(() => {
        const localData = localStorage.getItem('token');
        return localData ? JSON.parse(localData) : '';
    });

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

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
                window.location.assign('/profile');
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };
    return (
        <div>
            {error ? (
                <p className="alert alert-danger" role="alert">
                    {error}
                </p>
            ) : null}
            <FacebookLogin
                appId="993868381428713"
                autoLoad={false}
                callback={responseFacebook}
            />
        </div>
    );
};

export default LoginFromFacebook;
