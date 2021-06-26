import { useState } from "react"

//syling, because why not?
import './App.css';

const CalcAverage = ({ good, bad, allVotes }) => {
  return (
    <tr>
      <th scope="row">average</th>
      <td>{good - bad / allVotes}</td>
    </tr>
  )
}

const CalcPosititve = ({ good, allVotes }) => {
  return (
    <tr>
      <th scope="row">positive</th>
      <td>{(good / allVotes) * 100}%</td>
    </tr>
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
          <table>
            <tbody>
              <Statistic text={"good"} value={good} />
              <Statistic text={"neutral"} value={neutral} />
              <Statistic text={"bad"} value={bad} />
              <Statistic text={"all"} value={allVotes} />
              <CalcAverage good={good} bad={bad} allVotes={allVotes} />
              <CalcPosititve good={good} allVotes={allVotes} />
            </tbody>
          </table>

        </>
      }

    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <th scope="row">{text}</th>
      <td>{value}</td>
    </tr>

  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
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
        <Button text={"good"} handleClick={handleGood} />
        <Button text={"neutral"} handleClick={handleNeutral} />
        <Button text={"bad"} handleClick={handleBad} />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} allVotes={allVotes} />

    </section>
  );
}

export default App;
