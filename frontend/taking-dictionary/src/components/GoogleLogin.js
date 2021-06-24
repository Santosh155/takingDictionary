import { useState, useEffect } from 'react';
import Axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const LoginFromGoogle = () => {
    const [error, setError] = useState('');
    const [token, setToken] = useState(() => {
        const localData = localStorage.getItem('token');
        return localData ? JSON.parse(localData) : '';
    });

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);
    const responseSuccessGoogle = (response) => {
        console.log(response);
        Axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/googlelogin',
            data: { tokenId: response.tokenId },
        })
            .then((result) => {
                setToken(result.data.token);
                window.location.assign('/profile');
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };
    const responseErrorGoogle = (response) => {
        console.log('error');
    };

    return (
        <div>
            {error ? (
                <p className="alert alert-danger" role="alert">
                    {error}
                </p>
            ) : null}
            <br />
            <GoogleLogin
                clientId="771025381810-tbtrkiste2aphi9fd25dol6h6pfvd0vj.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default LoginFromGoogle;
