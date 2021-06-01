const Result = ({ word }) => {
    return (
        <div>
            {word.map((w, k) => (
                <p className="text-center" key={k}>
                    {w}
                </p>
            ))}
        </div>
    );
};

export default Result;
