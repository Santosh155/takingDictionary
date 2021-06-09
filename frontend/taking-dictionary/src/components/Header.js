import { Link } from 'react-router-dom';

const Header = ({ isAuth }) => {
    let logout, login, register;
    if (isAuth) {
        logout = <Link to="/logout">LogOut</Link>;
    } else {
        login = <Link to="/login">Login</Link>;
        register = <Link to="/register">Signup</Link>;
    }
    return (
        <header className="header">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                {logout}
                {(login, register)}
                <Link to="#">Saved Words</Link>
            </div>
        </header>
    );
};

export default Header;
