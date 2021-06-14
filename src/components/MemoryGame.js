import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Status from './Status';
import CardsBoard from './CardsBoard';

// Function to import all files from a directory.
function importAll(targetContext) {
    const files = {};
    targetContext.keys().forEach((item) => {
        files[item.replace(/.\/|.jpeg/gi, '')] = targetContext(item).default;
    });
    return files;
}

const charImagesContext = require.context('../i/characters', false, /\.jpeg$/);
const charImages = importAll(charImagesContext);

const CHARACTERS = [
    { name: 'Emma Nelson', img: charImages.emma },
    { name: 'Manny Santos', img: charImages.manny },
    { name: 'Liberty Van Zandt', img: charImages.liberty },
    { name: 'Jimmy Brooks', img: charImages.jimmy },
    { name: 'Terri MacGregor', img: charImages.terri },
    { name: 'Ashley Kerwin', img: charImages.ashley },
    { name: 'Toby Isaacs', img: charImages.toby },
    { name: 'Spinner Mason', img: charImages.spinner },
    { name: 'J.T. Yorke', img: charImages.jt },
    { name: 'Paige Michalchuk', img: charImages.paige },
    { name: 'Sean Cameron', img: charImages.sean },
    { name: 'Craig Manning', img: charImages.craig },
    { name: 'Hazel Aden', img: charImages.hazel },
    { name: 'Marco Del Rossi', img: charImages.marco },
    { name: 'Ellie Nash', img: charImages.ellie },
];

function MemoryGame() {
    const [displayedChars, setDisplayedChars] = useState(
        CHARACTERS.slice(0, 6)
    );

    const [clickedChars, setClickedChars] = useState([]);
    function handleCardClick(character) {
        console.log(clickedChars);
        console.log('Clicked ' + character.name);
        if (clickedChars.includes(character)) {
            console.log('YOU LOSE! you already clicked ' + character.name);
        } else {
            setClickedChars((prevState) => [...prevState, character]);
        }
    }

    // Shuffle displayed characters every time a character is clicked.
    useEffect(() => {
        // Check if win.
        if (clickedChars.length === CHARACTERS.length) {
            console.log('You clicked all characters! YOU WIN!');
            return;
        }

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
                        console.log(
                            'Every other char clicked? ' +
                                charsToDisplay.every((char) =>
                                    clickedChars.includes(char)
                                )
                        );
                        // Ensure that at least one non-clicked char appears.
                        if (
                            charsToDisplay.every((char) =>
                                clickedChars.includes(char)
                            ) &&
                            clickedChars.includes(CHARACTERS[i])
                        ) {
                            console.log('getting unique char...');
                            continue;
                        }
                    }
                    charsToDisplay.push(CHARACTERS[i]);
                }
            }

            return charsToDisplay;
        }
        setDisplayedChars(getCharsToDisplay());
    }, [clickedChars]);

    return (
        <main>
            <ScoreBoard score={0} highScore={0} />
            <Status />
            <CardsBoard
                characters={displayedChars}
                handleCardClick={handleCardClick}
            />
        </main>
    );
}

export default MemoryGame;
