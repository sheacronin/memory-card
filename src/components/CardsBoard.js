import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import '../styles/CardsBoard.css';
import CHARACTERS from '../data/degrassiChars';
import animateElement from '../animations';

function CardsBoard(props) {
    const { handleCardClick, clickedChars } = props;

    const [displayedChars, setDisplayedChars] = useState(
        CHARACTERS.slice(0, 6)
    );
    // Shuffle displayed characters every time a character is clicked.
    useEffect(() => {
        function getCharsToDisplay() {
            const charsToDisplay = [];
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
                        } else {
                            const randomIndex = Math.floor(Math.random() * 6);
                            console.log('Putting last char at ' + randomIndex);
                            charsToDisplay.splice(
                                randomIndex,
                                0,
                                CHARACTERS[i]
                            );
                            break;
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

    // Fade in board on each re-render.
    const boardRef = useRef(null);
    useEffect(() => {
        console.log(boardRef.current);
        animateElement(boardRef.current, 'fade-in');
    });

    return (
        <div ref={boardRef} id="cards-board">
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
