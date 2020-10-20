import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <div>
        <p>{anecdote}</p>
      </div>
      <div>
        <p> has {votes} votes </p>
      </div>
    </div>
  );
};
const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [maxVote, setMaxVote] = useState(0);
  const handleClick = () => {
    let random = Math.floor(Math.random() * anecdotes.length);
    if (random === selected) {
      random = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(random);
  };

  const handleVote = () => {
    setMaxVote(votes.indexOf(Math.max(...votes)));
    const vote = [...votes];
    setVotes(vote, (vote[selected] += 1));
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <div>
        <button onClick={handleClick}> random </button>
        <button onClick={handleVote}> vote </button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote anecdote={anecdotes[maxVote]} votes={votes[maxVote]} />
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
