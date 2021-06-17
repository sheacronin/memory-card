import React from 'react';
import '../styles/Card.css';

function Card(props) {
    const { character, handleCardClick } = props;

    async function animateCardClick(card) {
        card.classList.add('click-card');
        await Promise.all(card.getAnimations().map((anim) => anim.finished));
        card.classList.remove('click-card');
        return new Promise((resolve, reject) => {
            if (!card.classList.contains('click-card')) {
                resolve('The animation worked!');
            } else {
                reject('Something went wrong.');
            }
        });
    }

    return (
        <button
            className="card"
            onClick={(e) => {
                animateCardClick(e.currentTarget)
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
