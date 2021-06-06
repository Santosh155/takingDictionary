const Contact = () => {
    return (
        <div className="container" style={{ marginTop: '40px', width: '50%' }}>
            <form method="get">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">email</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label>Message</label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a message here"
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
