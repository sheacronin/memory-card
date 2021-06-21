import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Status from './Status';
import CardsBoard from './CardsBoard';
import CHARACTERS from '../data/degrassiChars';
import '../styles/MemoryGame.css';
import degrassiLogo from '../i/degrassi-logo.png';
import animateElement from '../animations';
import SeriesButton from './SeriesButton';

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

    useEffect(() => {
        console.log('Check for win effect runs');
        // Check if win.
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

    useEffect(() => {
        console.log('Check for clickedChars reset effect runs');
        // If just ended game, reset clickedChars.
        if (!gameStatus.isActive && clickedChars.length > 0) {
            console.log('resetting clicked characters...');
            setClickedChars([]);
        }
    }, [gameStatus, clickedChars]);

    return (
        <main>
            <h1>
                <img id="degrassi-logo" src={degrassiLogo} alt="Degrassi"></img>{' '}
                Memory Card Game
            </h1>
            <ScoreBoard clickedChars={clickedChars} />
            <Status gameOutcome={gameStatus.outcome} />
            {gameStatus.isActive ? (
                <CardsBoard
                    allCharacters={allActiveChars}
                    clickedChars={clickedChars}
                    handleCardClick={handleCardClick}
                />
            ) : (
                <div>
                    <button
                        id="new-game-btn"
                        onClick={(e) =>
                            animateElement(e.target, 'click-button').then(
                                () => {
                                    if (activeSeries[0]) {
                                        setGameStatus({ isActive: true });
                                    }
                                }
                            )
                        }
                    >
                        Start New Game
                    </button>
                    <div id="series-select">
                        Select which characters to include:
                        <div id="series-buttons">
                            <SeriesButton
                                handleClick={handleSeriesBtnClick}
                                series="DJH"
                                activeSeries={activeSeries}
                            />
                            <SeriesButton
                                handleClick={handleSeriesBtnClick}
                                series="DTNG"
                                activeSeries={activeSeries}
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default MemoryGame;
