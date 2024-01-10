import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>My Unity Games</h1>
            <nav>
                <Link to="/Alexandre-Gomes-Portfolio">Home</Link>
                <Link to="/Alexandre-Gomes-Portfolio/my-games">My Games</Link>
                <Link to="/Alexandre-Gomes-Portfolio/full-stack-shenanigans">Full Stack Shenanigans</Link>
                <Link to="/Alexandre-Gomes-Portfolio/contact">About me/Contact info</Link>
            </nav>
        </header>
    );
};

export default Header;