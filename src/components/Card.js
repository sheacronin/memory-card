import React from 'react';
import '../styles/Card.css';

function Card(props) {
    const { character } = props;

    return (
        <button className="card">
            <img src={character.img} alt={character.name} />
            <p>{character.name.toLowerCase()}</p>
        </button>
    );
}

export default Card;
