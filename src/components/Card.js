import React from 'react';

function Card(props) {
    const { character } = props;

    return (
        <button>
            <img src={character.img} alt={character.name} />
            {character.name}
        </button>
    );
}

export default Card;
