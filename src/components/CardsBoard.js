import React from 'react';
import Card from './Card';

const characters = [{ name: 'Emma Nelson', img: '#' }];

function Board() {
    return <Card character={characters[0]} />;
}

export default Board;
