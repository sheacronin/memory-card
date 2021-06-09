import './App.css';

function App() {
    return (
        <>
            <h1>Title</h1>
            <MemoryGame />
        </>
    );
}

function MemoryGame() {
    return (
        <>
            <ScoreBoard score={0} highScore={0} />
            <Status />
            <Board />
        </>
    );
}

function ScoreBoard(props) {
    const { score, highScore } = props;

    return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
        </div>
    );
}

const messages = {
    instructions:
        'Click on any character that you have not already selected. If you click on a character you have previously selected, you lose!',
};

function Status() {
    return <div>{messages.instructions}</div>;
}

const characters = [{ name: 'Emma Nelson', img: '#' }];

function Board() {
    return <Card character={characters[0]} />;
}

function Card(props) {
    const { character } = props;

    return (
        <button>
            <img src={character.img} alt={character.name} />
            {character.name}
        </button>
    );
}

export default App;
