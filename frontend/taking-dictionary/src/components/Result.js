const Result = ({ meaning }) => {
    return (
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <h4 className="container">
                <strong>{meaning.word}</strong>: meaning is
            </h4>
            <p className="container">{meaning.meaning}</p>
        </div>
    );
};

export default Result;
