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
import Result from './components/Result';

function App() {
    const [words, setWords] = useState([]);
    // const [word, setWord] = useState([]);

    // useEffect(() => {
    //     const getMeaning = async () => {
    //         const meaningFromServer = await word();
    //         console.log(meaningFromServer);
    //         setWords(meaningFromServer);
    //     };
    //     getMeaning();
    // }, []);

    // fetch data
    // const fetchData = async () => {
    //     const res = await fetch(
    //         'http://localhost:5000/api/v1/dictionary/getWord'
    //     );
    //     const data = await res.json();
    //     return data.meaning;
    // };
    const word = async (word) => {
        // const test = word.dictionary;
        // console.log(word.length);
        if (word !== undefined) {
            const res = await fetch(
                `http://localhost:5000/api/v1/dictionary/getWord/${word.dictionary}`
            );

            const data = await res.json();
            const arr = data.meaning.meaning;
            setWords([word.dictionary, arr]);
            // console.log(data.meaning);
            return data.meaning;
        } else {
            return;
        }
    };
    return (
        <Router>
            <div className="App">
                <Header />
                <Route
                    path="/"
                    exact
                    render={() => (
                        <>
                            <Dictionary word={word} />
                            {words.length !== 0 ? (
                                <Result word={words} />
                            ) : (
                                'Enter words to find meaning'
                            )}
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
