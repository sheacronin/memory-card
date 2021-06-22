import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import '../styles/CardsBoard.css';
import animateElement from '../animations';

function CardsBoard(props) {
    const { handleCardClick, clickedChars, allCharacters } = props;

    const [displayedChars, setDisplayedChars] = useState([]);
    // Shuffle displayed characters every time a character is clicked.
    useEffect(() => {
        function getCharsToDisplay() {
            const charsToDisplay = [];

            while (charsToDisplay.length < 6) {
                const i = Math.floor(Math.random() * allCharacters.length);
                if (charsToDisplay.includes(allCharacters[i])) {
                    continue;
                } else {
                    if (charsToDisplay.length === 5) {
                        // Ensure that at least one non-clicked char appears.
                        if (
                            charsToDisplay.every((char) =>
                                clickedChars.includes(char)
                            ) &&
                            clickedChars.includes(allCharacters[i])
                        ) {
                            continue;
                        } else { // Insert last char in random position.
                            const randomIndex = Math.floor(Math.random() * 6);
                            charsToDisplay.splice(
                                randomIndex,
                                0,
                                allCharacters[i]
                            );
                            break;
                        }
                    }
                    charsToDisplay.push(allCharacters[i]);
                }
            }

            return charsToDisplay;
        }

        // Update displayedChars state if game is active.
        if (clickedChars.length < allCharacters.length) {
            setDisplayedChars(getCharsToDisplay());
        }
    }, [clickedChars, allCharacters]);

    // Fade in board on each re-render.
    const boardRef = useRef(null);
    useEffect(() => {
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
