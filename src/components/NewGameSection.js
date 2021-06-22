import React from 'react';
import animateElement from '../animations';
import SeriesButton from './SeriesButton';

function NewGameSection(props) {
    const { activeSeries, setGameStatus, handleSeriesBtnClick } = props;

    return (
        <div>
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
    );
}

export default NewGameSection;
