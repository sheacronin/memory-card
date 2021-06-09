import React from 'react';

const messages = {
    instructions:
        'Click on any character that you have not already selected. If you click on a character you have previously selected, you lose!',
};

function Status() {
    return <div>{messages.instructions}</div>;
}

export default Status;
