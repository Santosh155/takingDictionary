import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Result from './Result';

const Dictionary = () => {
    const [meaning, setMeaning] = useState([]);
    const [error, setError] = useState('');
    const [dictionary, setDictionary] = useState('');
    const test = useLocation().search;
    const name = new URLSearchParams(test).get('name');
    useEffect(() => {
        setDictionary(name);
        console.log(dictionary);
        if (!dictionary) {
            setError('Please enter a word in dictionary');
            return;
        }
        Axios.get(
            `http://localhost:5000/api/v1/dictionary/getWord/${dictionary}`
        )
            .then((response) => {
                const obj = {
                    word: response.data.meaning.word,
                    meaning: response.data.meaning.meaning,
                };
                setMeaning([obj]);
            })
            .catch((error) => {
                // setError(error.response.data.message);
                console.log(error);
            });
    }, [dictionary, name]);
    const onSubmit = (e) => {
        e.preventDefault();
        // if (!dictionary) {
        //     setError('Please enter a word in dictionary');
        //     return;
        // }
        // Axios.get(
        //     `http://localhost:5000/api/v1/dictionary/getWord/${dictionary}`
        // )
        //     .then((response) => {
        //         const obj = {
        //             word: response.data.meaning.word,
        //             meaning: response.data.meaning.meaning,
        //         };
        //         setMeaning([obj]);
        //     })
        //     .catch((error) => {
        //         setError(error.response.data.message);
        //     });
    };
    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            <h2>Search for a word</h2>
            {error ? (
                <p className="alert alert-danger" role="alert">
                    {error}
                </p>
            ) : null}
            <form method="get" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Enter words"
                    className="dictionary"
                    value={dictionary}
                    onChange={(e) => setDictionary(e.target.value)}
                />{' '}
                <input type="submit" className="btn btn-primary" />
            </form>
            {meaning.map((m, key) => (
                <Result key={key} meaning={m} />
            ))}
        </div>
    );
};

export default Dictionary;
