const Result = ({ word }) => {
    return (
        <div>
            {word.map((w) => (
                <p className="text-center">{w}</p>
            ))}
        </div>
    );
};

export default Result;
