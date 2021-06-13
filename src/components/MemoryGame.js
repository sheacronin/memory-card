import React from 'react';
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
    function getCharsToDisplay() {
        function generateIndex(listLength) {
            return Math.floor(Math.random() * listLength);
        }

        const displayedChars = [];

        while (displayedChars.length < 6) {
            const i = generateIndex(CHARACTERS.length);
            if (displayedChars.includes(CHARACTERS[i])) {
                continue;
            } else {
                displayedChars.push(CHARACTERS[i]);
            }
        }

        return displayedChars;
    }

    const displayedChars = getCharsToDisplay();

    return (
        <main>
            <ScoreBoard score={0} highScore={0} />
            <Status />
            <CardsBoard characters={displayedChars} />
        </main>
    );
}

export default MemoryGame;
