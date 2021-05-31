const Signup = () => {
    return (
        <>
            <form method="post">
                Full Name: <input type="text" name="name" /> <br />
                Email: <input type="email" name="email" /> <br />
                Password: <input type="password" name="password" /> <br />
                Address: <input type="address" name="address" /> <br />
                <input type="submit" />
            </form>
        </>
    );
};

export default Signup;
