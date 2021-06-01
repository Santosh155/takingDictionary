const Result = ({ word }) => {
    return (
        <div>
            {/* {word.map((w, k) => (
                <p className="text-center" key={k}>
                    {w}
                </p>
            ))} */}
            <h3 className="container">{word[0]} meaning is</h3>
            <p className="container">{word[1]}</p>
        </div>
    );
};

export default Result;
