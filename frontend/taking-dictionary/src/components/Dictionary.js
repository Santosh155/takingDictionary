const Dictionary = () => {
    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            <h2>Search for a word</h2>
            <form method="get">
                <input
                    type="text"
                    placeholder="Enter words"
                    className="dictionary"
                />
            </form>
        </div>
    );
};

export default Dictionary;
