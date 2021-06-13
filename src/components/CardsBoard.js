import React from 'react';
import Card from './Card';
import '../styles/CardsBoard.css';

function CardsBoard(props) {
    const { characters } = props;
    return (
        <div id="cards-board">
            {characters.map((character) => (
                <Card key={character.name} character={character} />
            ))}
        </div>
    );
}

export default CardsBoard;
