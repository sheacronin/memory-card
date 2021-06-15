import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/CardsBoard.css';
import CHARACTERS from '../data/degrassiChars';

function CardsBoard(props) {
    console.log('--- CardsBoard Render ---');
    const { handleCardClick, clickedChars } = props;

    const [displayedChars, setDisplayedChars] = useState(
        CHARACTERS.slice(0, 6)
    );
    // Shuffle displayed characters every time a character is clicked.
    useEffect(() => {
        function getCharsToDisplay() {
            const charsToDisplay = [];
            console.log('--- getCharsToDisplay() ---');
            console.log('Clicked Characters:', clickedChars);

            while (charsToDisplay.length < 6) {
                const i = Math.floor(Math.random() * CHARACTERS.length);
                if (charsToDisplay.includes(CHARACTERS[i])) {
                    continue;
                } else {
                    if (charsToDisplay.length === 5) {
                        console.log('Last character...' + CHARACTERS[i].name);
                        // Ensure that at least one non-clicked char appears.
                        if (
                            charsToDisplay.every((char) =>
                                clickedChars.includes(char)
                            ) &&
                            clickedChars.includes(CHARACTERS[i])
                        ) {
                            console.log('Getting unique char...');
                            continue;
                        }
                    }
                    charsToDisplay.push(CHARACTERS[i]);
                }
            }

            return charsToDisplay;
        }
        if (
            // Update displayedChars state if game is active.
            clickedChars.length > 0 &&
            clickedChars.length < CHARACTERS.length
        ) {
            setDisplayedChars(getCharsToDisplay());
        }
    }, [clickedChars]);

    return (
        <div id="cards-board">
            {displayedChars.map((character) => (
                <Card
                    key={character.name}
                    character={character}
                    handleCardClick={handleCardClick}
                />
            ))}
        </div>
    );
}

export default CardsBoard;
