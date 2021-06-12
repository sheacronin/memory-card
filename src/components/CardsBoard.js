import React from 'react';
import Card from './Card';

// Rename
function CardsBoard(props) {
    const { characters } = props;
    return (
        <div>
            {characters.map((character) => (
                <Card key={character.name} character={character} />
            ))}
        </div>
    );
}

export default CardsBoard;
