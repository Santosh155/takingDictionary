const Contact = () => {
    return (
        <div className="container" style={{ marginTop: '40px', width: '50%' }}>
            <form method="get">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Name
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
                        email
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div class="mb-3">
                    <label for="floatingTextarea">Message</label>
                    <textarea
                        class="form-control"
                        placeholder="Leave a message here"
                        id="floatingTextarea"
                    ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
