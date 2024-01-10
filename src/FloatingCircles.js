import React from 'react';

const FloatingCircles = () => {
    const createCircles = () => {
        let circles = [];
        for (let i = 0; i < 20; i++) {
            const size = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
            const left =  85 + Math.random() * 10;
            const animationDuration = 25 + Math.random() * 15; // Between 5 and 15 seconds
            
            circles.push(
                <div key={i} className={'circle ' + size} style={{ left: left + 'vw', animationDuration: animationDuration + 's' }} />
            );
        }
        return circles;
    };

    return <>{createCircles()}</>;
};

export default FloatingCircles;


