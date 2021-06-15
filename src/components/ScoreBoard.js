import React, { useEffect, useState } from 'react';

function ScoreBoard(props) {
    const { clickedChars } = props;

    const score = clickedChars.length;
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score, highScore]);

    return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
        </div>
    );
}

export default ScoreBoard;
