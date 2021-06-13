import React from 'react';
import Card from './Card';
import '../styles/CardsBoard.css';

function CardsBoard(props) {
    const { characters, handleCardClick } = props;
    return (
        <div id="cards-board">
            {characters.map((character) => (
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
