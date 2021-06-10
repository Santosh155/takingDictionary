import { Link } from 'react-router-dom';

const Header = ({ isAuth }) => {
    const logoutFunc = () => {
        localStorage.clear();
        window.location.assign('/login');
    };

    return (
        <header className="header">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                {isAuth ? (
                    <>
                        <Link to="/logout" onClick={logoutFunc}>
                            LogOut
                        </Link>{' '}
                        <Link to="/profile">Profile</Link>{' '}
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>;
                        <Link to="/register">Signup</Link>;
                    </>
                )}
                <Link to="#">Saved Words</Link>
            </div>
        </header>
    );
};

export default Header;
