import React from 'react';
import animateElement from '../animations';
import SeriesButton from './SeriesButton';
import '../styles/NewGameSection.css';

function NewGameSection(props) {
    const { activeSeries, setGameStatus, handleSeriesBtnClick } = props;

    return (
        <section>
            <button
                id="new-game-btn"
                onClick={(e) =>
                    animateElement(e.target, 'click-button').then(() => {
                        if (activeSeries[0]) {
                            setGameStatus({ isActive: true });
                        }
                    })
                }
            >
                Start New Game
            </button>
            <div id="series-select">
                Select which characters to include:
                <div id="series-container">
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
        </section>
    );
}

export default NewGameSection;
