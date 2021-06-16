import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Status from './Status';
import CardsBoard from './CardsBoard';
import CHARACTERS from '../data/degrassiChars';
import '../styles/MemoryGame.css';
import degrassiLogo from '../i/degrassi-logo.png';

function MemoryGame() {
    const [gameStatus, setGameStatus] = useState({ isActive: false });

    const [clickedChars, setClickedChars] = useState([]);
    function handleCardClick(character) {
        console.log('Clicked ' + character.name);
        if (clickedChars.includes(character)) {
            console.log('YOU LOSE! you already clicked ' + character.name);
            setGameStatus({
                isActive: false,
                outcome: ['lose', character.name],
            });
        } else {
            setClickedChars((prevState) => [...prevState, character]);
        }
    }

    useEffect(() => {
        console.log('Check for win effect runs');
        // Check if win.
        if (clickedChars.length === CHARACTERS.length) {
            // shouldn't hard-code CHARACTERS length.. import it from separate file?
            console.log('You clicked all characters! YOU WIN!');
            setGameStatus({
                isActive: false,
                outcome: ['win', CHARACTERS.length],
            });
        }
    }, [clickedChars]);

    useEffect(() => {
        console.log('Check for clickedChars reset effect runs');
        // If just ended game, reset clickedChars.
        if (!gameStatus.isActive && clickedChars.length > 0) {
            console.log('resetting clicked characters...');
            setClickedChars([]);
        }
    }, [gameStatus, clickedChars]);

    return (
        <main>
            <h1>
                <img id="degrassi-logo" src={degrassiLogo} alt="Degrassi"></img>{' '}
                Memory Card Game
            </h1>
            <ScoreBoard clickedChars={clickedChars} />
            <Status gameOutcome={gameStatus.outcome} />
            {gameStatus.isActive ? (
                <CardsBoard
                    clickedChars={clickedChars}
                    handleCardClick={handleCardClick}
                />
            ) : (
                <button
                    id="new-game-btn"
                    onClick={() => setGameStatus({ isActive: true })}
                >
                    Start New Game
                </button>
            )}
        </main>
    );
}

export default MemoryGame;
