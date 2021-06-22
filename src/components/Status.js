import React from 'react';
import '../styles/Status.css';

function Status(props) {
    const { gameOutcome, numOfChars } = props;

    const getMessage = (outcome) => {
        if (numOfChars === 0) {
            return <p>Please select <strong className="red">at least one series</strong> to play the game.</p>
        }

        if (outcome) {
            const [result, trigger] = outcome;
            if (result === 'win') {
                return <p>You clicked all <strong className="green">{trigger} characters</strong>! YOU WIN!</p>;
            } else {
                return <p>You already clicked <strong className="red">{trigger}</strong>, you lose!</p>;
            }
        } else {
            return <p>Click on any character that you have not already selected. Click all {numOfChars} unique characters to win.</p>;
        }
    };

    const message = getMessage(gameOutcome);

    return <div id="status">{message}</div>;
}

export default Status;
