// import 'bootstrap/dist/css/bootstrap.min.css';
const Signup = () => {
    return (
        <div className="container">
            <form method="post">
                Full Name: <input type="text" name="name" /> <br />
                Email: <input type="email" name="email" /> <br />
                Password: <input type="password" name="password" /> <br />
                Address: <input type="address" name="address" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Signup;
