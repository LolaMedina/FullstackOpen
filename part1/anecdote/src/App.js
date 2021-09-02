import { useState } from 'react';
import './App.css';

const Title = ({ title }) => <h2>{title}</h2>;

const Anecdote = ({ text, votes }) => <div><p>{text}</p> <p>has {votes} votes.</p></div>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [selected, setSelected] = useState(0);
  const [voteCount, setVote] = useState(Array(7).fill(0));
  const handleClick = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);

    setSelected(randomAnecdote);
  };

  const handleVoteClick = () => {
    const newVoteCount = [...voteCount];
    newVoteCount[selected] += 1;
    setVote(newVoteCount);

  };

  const Winner = ({ anecdotes, allVotes }) => {
    const highestVoteCount = Math.max(...allVotes);
    const winnerIndex = allVotes.indexOf(highestVoteCount);
    const winner = anecdotes[winnerIndex];
    if (highestVoteCount === 0) {
      return (
        <p>No votes yet</p>
      );
    }
    return (
      <div>
        <p>{winner}</p>
        <p>has {highestVoteCount} votes</p>
      </div>
    )
  }

    return (
      <div className="App">
        <Title title="Anecdote of the Day" />
        <Anecdote text={anecdotes[selected]} votes={voteCount[selected]} />
        <Button onClick={handleClick} text="next anecdote" />
        <Button onClick={handleVoteClick} text="vote" />
        <Title title="Anecdote with the most votes" />
        <Winner anecdotes={anecdotes} allVotes={voteCount} />
      </div>
    );
  };
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];


  export default App;
