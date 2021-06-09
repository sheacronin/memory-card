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
            <ScoreBoard />
            <Status />
            <Board />
        </>
    );
}

function ScoreBoard() {
    return <div>Score</div>;
}

function Status() {
    return <div>Status</div>;
}

function Board() {
    return <Card />;
}

function Card() {
    return <div>Card</div>;
}

export default App;
