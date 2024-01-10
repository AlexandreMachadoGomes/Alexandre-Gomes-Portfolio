import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const GamesSubHeader = () => {
    const location = useLocation();

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200); // Reset after animation
    };



    if (location.pathname.startsWith('/Alexandre-Gomes-Portfolio/my-games')) {
        return (
            <div className="games-subheader">
                <Link to="/Alexandre-Gomes-Portfolio/my-games/game1" className={`game-link ${clicked ? 'game-link-clicked' : ''}`} onClick={handleClick}>
                    <img src="/Envrion.jpg" alt="Envrion" className="game-thumbnail" />
                    <span>Envrion</span>
                </Link>
                <Link to="/Alexandre-Gomes-Portfolio/my-games/game1" className={`game-link ${clicked ? 'game-link-clicked' : ''}`} onClick={handleClick}>
                    <img src="/Envrion.jpg" alt="Envrion" className="game-thumbnail" />
                    <span>Envrion</span>
                </Link>
                <Link to="/Alexandre-Gomes-Portfolio/my-games/game1" className={`game-link ${clicked ? 'game-link-clicked' : ''}`} onClick={handleClick}>
                    <img src="/Envrion.jpg" alt="Envrion" className="game-thumbnail" />
                    <span>Envrion</span>
                </Link>
            </div>
        );
    }

    return null;
};

export default GamesSubHeader;