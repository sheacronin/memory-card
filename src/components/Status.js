import React from 'react';

function Status(props) {
    const { gameOutcome } = props;

    const getMessage = (outcome) => {
        if (outcome) {
            const [result, trigger] = outcome;
            if (result === 'win') {
                return `You clicked all ${trigger} characters! YOU WIN!`;
            } else {
                return `You already clicked ${trigger}, you lose!`;
            }
        } else {
            return 'Click on any character that you have not already selected. If you click on a character you have previously selected, you lose!';
        }
    };

    const message = getMessage(gameOutcome);

    return <div>{message}</div>;
}

export default Status;
