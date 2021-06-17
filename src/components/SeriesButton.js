import React from 'react';
import '../styles/SeriesButton.css';

function SeriesButton(props) {
    const { series, activeSeries, handleClick } = props;
    const isActive = activeSeries.includes(series);

    return (
        <button
            className={isActive ? 'series-button active' : 'series-button'}
            onClick={() => handleClick(series)}
        >
            {series}
        </button>
    );
}

export default SeriesButton;
