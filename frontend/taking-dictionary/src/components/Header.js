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
                <a href="#">Login</a>
                <a href="#">Signup</a>
                <a href="#">Saved Words</a>
            </div>
        </header>
    );
};

export default Header;
