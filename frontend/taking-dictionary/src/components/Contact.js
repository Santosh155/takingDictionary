const Contact = () => {
    return (
        <div className="container">
            <form method="get">
                Name: <input type="text" /> <br />
                Email: <input type="email" /> <br />
                Message: <textarea rows="10" cols="20"></textarea>
            </form>
        </div>
    );
};

export default Contact;
