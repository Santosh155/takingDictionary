import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Signup</Link>
                <Link to="#">Saved Words</Link>
            </div>
        </header>
    );
};

export default Header;
