import React from 'react';
import '../styles/Card.css';
import animateElement from '../animations';

function Card(props) {
    const { character, handleCardClick } = props;

    return (
        <button
            className="card"
            onClick={(e) => {
                animateElement(e.currentTarget, 'click-card')
                    .then((message) => {
                        console.log(message);
                        handleCardClick(character);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }}
        >
            <img src={character.img} alt={character.name} />
            <p>{character.name.toLowerCase()}</p>
        </button>
    );
}

export default Card;
