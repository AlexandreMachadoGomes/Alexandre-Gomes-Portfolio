import { Link, useLocation } from 'react-router-dom';

const GamesSubHeader = () => {
    const location = useLocation();

    if (location.pathname.startsWith('/my-games')) {
        return (
            <div className="games-subheader">
                <Link to="/my-games/game1" className="game-link">
                    <img src="/Envrion.jpg" alt="Envrion" className="game-thumbnail" />
                    <span>Envrion</span>
                </Link>
                <Link to="/my-games/game2" className="game-link">
                    <img src="/Envrion.jpg" alt="Envrion" className="game-thumbnail" />
                    <span>Envrion</span>
                </Link>
                <Link to="/my-games/game3" className="game-link">
                    <img src="/Envrion.jpg" alt="Envrion" className="game-thumbnail" />
                    <span>Envrion</span>
                </Link>
            </div>
        );
    }

    return null;
};

export default GamesSubHeader;