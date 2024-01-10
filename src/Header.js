import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>My Unity Games</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/my-games">My Games</Link>
                <Link to="/full-stack-shenanigans">Full Stack Shenanigans</Link>
                <Link to="/contact">About me/Contact info</Link>
            </nav>
        </header>
    );
};

export default Header;