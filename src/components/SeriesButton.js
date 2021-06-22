import React from 'react';
import '../styles/SeriesButton.css';

function SeriesButton(props) {
    const { series, activeSeries, handleClick } = props;
    const isActive = activeSeries.includes(series);

    let fullSeriesName;

    switch (series) {
        case 'DJH':
            fullSeriesName = 'Degrassi Junior High';
            break;
        case 'DTNG':
            fullSeriesName = 'Degrassi: The Next Generation';
            break;
        default:
            break;
    }

    return (
        <div className="series-btn-container">
            <button
                className={isActive ? 'series-button active' : 'series-button'}
                onClick={() => handleClick(series)}
                id={series}
            >
                {series}
            </button>
            <label htmlFor={series}>{fullSeriesName}</label>
        </div>
    );
}

export default SeriesButton;
