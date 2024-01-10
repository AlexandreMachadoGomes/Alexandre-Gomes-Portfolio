import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import GamesSubHeader from './GamesSubHeader';
import FloatingCircles from './FloatingCircles';

const App = () => {
    return (
        <div id="root">
            <Router>
                <FloatingCircles/>

                <Header />

                <div className="flex-container">
                    <GamesSubHeader />
                    <div className="content-container">
                        <Routes>
                            <Route path="/" element={<div />} />
                            <Route path="/my-games" element={<div />} />
                            <Route path="/full-stack-shenanigans" element={<div />} />
                            <Route path="/contact" element={<div />} />

                            <Route path="/my-games/game1" element={<div className="game-container"><Game /></div>} />
                            <Route path="/my-games/game2" element={<div className="game-container"><Game /></div>} />
                            <Route path="/my-games/game3" element={<div className="game-container"><Game /></div>} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
};

export default App;