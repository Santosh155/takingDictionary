import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Dictionary from './components/Dictionary';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
    console.log(localStorage.getItem('token'));
    const [isAuth] = useState(() => {
        const tokenFromStorage = JSON.parse(localStorage.getItem('token'));
        if (tokenFromStorage !== null && tokenFromStorage.length >= 10) {
            return true;
        } else {
            return false;
        }
    });
    console.log(isAuth);
    return (
        <Router>
            <div className="App">
                <Header isAuth={isAuth} />
                <Route
                    path="/"
                    exact
                    render={() => (
                        <>
                            <Dictionary />
                        </>
                    )}
                />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <ProtectedRoute
                    path="/profile"
                    component={Profile}
                    isAuth={isAuth}
                />
                <Route path="/register" component={Signup} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
