import React from 'react';
import ScoreBoard from './ScoreBoard';
import Status from './Status';
import CardsBoard from './CardsBoard';

const CHARACTERS = [
    { name: 'Emma Nelson', img: '#' },
    { name: 'Manny Santos', img: '#' },
    { name: 'Liberty Van Zandt', img: '#' },
    { name: 'Jimmy Brooks', img: '#' },
    { name: 'Terri MacGregor', img: '#' },
    { name: 'Ashley Kerwin', img: '#' },
    { name: 'Toby Isaacs', img: '#' },
    { name: 'Spinner Mason', img: '#' },
    { name: 'J.T. Yorke', img: '#' },
    { name: 'Paige Michalchuk', img: '#' },
    { name: 'Sean Cameron', img: '#' },
    { name: 'Craig Manning', img: '#' },
    { name: 'Hazel Aden', img: '#' },
    { name: 'Marco Del Rossi', img: '#' },
    { name: 'Ellie Nash', img: '#' },
];

function MemoryGame() {
    return (
        <>
            <ScoreBoard score={0} highScore={0} />
            <Status />
            {/* Later, characters will be displayedCharacters state? */}
            <CardsBoard characters={CHARACTERS} />
        </>
    );
}

export default MemoryGame;
