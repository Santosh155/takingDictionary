import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="container text-center" style={{ marginTop: '40px' }}>
            <p>Version 1.0.0</p>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default About;
