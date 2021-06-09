import React from 'react';

function ScoreBoard(props) {
    const { score, highScore } = props;

    return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
        </div>
    );
}

export default ScoreBoard;
