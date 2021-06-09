import React from 'react';
import ScoreBoard from './ScoreBoard';
import Status from './Status';
import CardsBoard from './CardsBoard';

function MemoryGame() {
    return (
        <>
            <ScoreBoard score={0} highScore={0} />
            <Status />
            <CardsBoard />
        </>
    );
}

export default MemoryGame;
