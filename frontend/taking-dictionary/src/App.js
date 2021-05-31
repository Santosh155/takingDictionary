import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dictionary from './components/Dictionary';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Dictionary />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
