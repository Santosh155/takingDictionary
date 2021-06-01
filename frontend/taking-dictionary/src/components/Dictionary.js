import { useState } from 'react';

const Dictionary = ({ word }) => {
    const [dictionary, setDictionary] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!dictionary) {
            alert('Please enter a word in dictionary');
            return;
        }
        word({ dictionary });
        setDictionary('');
    };
    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            <h2>Search for a word</h2>
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
        </div>
    );
};

export default Dictionary;
