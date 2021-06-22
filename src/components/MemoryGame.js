import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Status from './Status';
import CardsBoard from './CardsBoard';
import CHARACTERS from '../data/degrassiChars';
import '../styles/MemoryGame.css';
import degrassiLogo from '../i/degrassi-logo.png';
import NewGameSection from './NewGameSection';

function MemoryGame() {
    const [gameStatus, setGameStatus] = useState({ isActive: false });

    const [clickedChars, setClickedChars] = useState([]);
    function handleCardClick(character) {
        console.log('Clicked ' + character.name);
        if (clickedChars.includes(character)) {
            console.log('YOU LOSE! you already clicked ' + character.name);
            setGameStatus({
                isActive: false,
                outcome: ['lose', character.name],
            });
        } else {
            setClickedChars((prevState) => [...prevState, character]);
        }
    }

    const [activeSeries, setActiveSeries] = useState(['DTNG']);
    function handleSeriesBtnClick(series) {
        if (activeSeries.includes(series)) {
            setActiveSeries((prevState) => {
                const newState = [...prevState];
                const i = newState.indexOf(series);
                newState.splice(i, 1);
                return newState;
            });
        } else {
            setActiveSeries((prevState) => [...prevState, series]);
        }
    }

    // Store any characters that belong to an active series.
    const allActiveChars = CHARACTERS.filter((char) =>
        char.series.some((series) => activeSeries.includes(series))
    );

    // Check if win.
    useEffect(() => {
        if (
            clickedChars.length === allActiveChars.length &&
            clickedChars.length > 0
        ) {
            console.log('You clicked all characters! YOU WIN!');
            setGameStatus({
                isActive: false,
                outcome: ['win', allActiveChars.length],
            });
        }
    }, [clickedChars, allActiveChars]);

    // If just ended game, reset clickedChars.
    useEffect(() => {
        if (!gameStatus.isActive && clickedChars.length > 0) {
            console.log('resetting clicked characters...');
            setClickedChars([]);
        }
    }, [gameStatus, clickedChars]);

    return (
        <main>
            <h1>
                <img id="degrassi-logo" src={degrassiLogo} alt="Degrassi"></img>
                Memory Card Game
            </h1>
            <ScoreBoard clickedChars={clickedChars} />
            <Status gameOutcome={gameStatus.outcome} numOfChars={allActiveChars.length}/>
            {gameStatus.isActive ? (
                <CardsBoard
                    allCharacters={allActiveChars}
                    clickedChars={clickedChars}
                    handleCardClick={handleCardClick}
                />
            ) : (
                <NewGameSection
                    activeSeries={activeSeries}
                    handleSeriesBtnClick={handleSeriesBtnClick}
                    setGameStatus={setGameStatus}
                />
            )}
        </main>
    );
}

export default MemoryGame;
