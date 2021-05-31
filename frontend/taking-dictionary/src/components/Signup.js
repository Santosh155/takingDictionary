// import 'bootstrap/dist/css/bootstrap.min.css';
const Signup = () => {
    return (
        <div className="container" style={{ width: '40%', marginTop: '40px' }}>
            <form method="post">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Current Address
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
