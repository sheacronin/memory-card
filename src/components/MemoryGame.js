import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Status from './Status';
import CardsBoard from './CardsBoard';
import CHARACTERS from '../data/degrassiChars';

function MemoryGame() {
    console.log('--- MemoryGame Render ---');

    const [isGameActive, setIsGameActive] = useState(false);

    const [clickedChars, setClickedChars] = useState([]);
    function handleCardClick(character) {
        console.log('Clicked ' + character.name);
        if (clickedChars.includes(character)) {
            console.log('YOU LOSE! you already clicked ' + character.name);
            setIsGameActive(false);
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
            setIsGameActive(false);
        }
    }, [clickedChars]);

    const score = clickedChars.length;
    let highScore = 0;
    useEffect(() => {
        console.log('Check for clickedChars reset effect runs');
        // If just started new game, reset clickedChars.
        if (!isGameActive && clickedChars.length > 0) {
            console.log('resetting clicked characters...');
            setClickedChars([]);
        }
    }, [isGameActive, clickedChars]);

    return (
        <main>
            <ScoreBoard score={score} highScore={highScore} />
            <Status />
            {isGameActive ? (
                <CardsBoard
                    clickedChars={clickedChars}
                    handleCardClick={handleCardClick}
                />
            ) : (
                <button onClick={() => setIsGameActive(true)}>
                    Start New Game
                </button>
            )}
        </main>
    );
}

export default MemoryGame;
