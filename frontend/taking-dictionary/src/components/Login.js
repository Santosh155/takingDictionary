// import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    return (
        <div className="container">
            <form method="post">
                Email: <input type="email" /> <br />
                Password: <input type="password" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;
