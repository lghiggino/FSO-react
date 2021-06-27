import { useState } from 'react';
import './App.css';



function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    }
  )
  const [maxVotes, setMaxvotes] = useState(0)

  const handleRandomization = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = { ...votes }
    copy[selected] += 1
    setVotes(copy)
    const keys = Object.keys(votes);
    let maxValue = 0
    let maxKey = 0
    keys.forEach((key) => {
      if(copy[key]>maxValue){
        maxValue = copy[key]
        maxKey = key
      }
    });
    setMaxvotes(maxKey)
  }

  

  return (
    <section className="App">
      <button onClick={handleRandomization}>Generate another anecdote</button>
      <button onClick={handleVote}>Upvote</button>
      <div>
        <h2>Anecdotes </h2>
        <p>{anecdotes[selected]}</p>
      </div>
      <div>
        <p>this anecdote has {votes[selected]} vote{votes[selected] !== 1 ? "s" : ""}.</p>
      </div>
      <div>
        <h2>The anecdote with the most votes is:</h2>
        <p>the most voted is: {anecdotes[maxVotes]}</p>
      </div>
    </section>
  );
}

export default App;
