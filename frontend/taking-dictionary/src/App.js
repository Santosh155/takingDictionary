import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dictionary from './components/Dictionary';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'http://localhost:5000/api/v1/dictionary/getWord'
            );
            const data = await res.json();
            console.log(data);
        };
        fetchData();
    }, []);
    return (
        <Router>
            <div className="App">
                <Header />
                <Route
                    path="/"
                    exact
                    render={(props) => (
                        <>
                            <Dictionary />
                        </>
                    )}
                />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Signup} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
