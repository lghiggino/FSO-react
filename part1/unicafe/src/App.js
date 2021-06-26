import { useState } from "react"

//syling, because why not?
import './App.css';

const CalcAverage = ({ good, bad, allVotes }) => {
  return (
    <p>average: {good - bad / allVotes}</p>
  )
}

const CalcPosititve = ({ good, allVotes }) => {
  return (
    <p>positives: {(good / allVotes) * 100}%</p>
  )
}

const Statistics = ({ good, neutral, bad, allVotes }) => {
  return (
    <div>
      <h2> Statistics</h2>
      {!allVotes ?
        <>
          <p>No feedback given</p>
        </>
        :
        <>
          <p>good: {good}</p>
          <p>neutral: {neutral}</p>
          <p>bad: {bad}</p>
          <p>all: {allVotes}</p>
          <CalcAverage good={good} bad={bad} allVotes={allVotes} />
          <CalcPosititve good={good} allVotes={allVotes} />
        </>
      }

    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAllVotes] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAllVotes(allVotes + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAllVotes(allVotes + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAllVotes(allVotes + 1)
  }

  return (
    <section className="App">
      <div>
        <h2>Give Feedback</h2>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} allVotes={allVotes} />

    </section>
  );
}

export default App;
