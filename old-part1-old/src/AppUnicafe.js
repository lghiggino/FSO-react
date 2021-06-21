import React, {useState} from 'react'

const Button = ( {handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const TableLine = (props) => {
    return (
        <tr>
            <td>{props.statTitle}</td>
            <td>{props.statValue}</td>
        </tr>
    )
}

const MainStats = ({good, neutral, bad, all, average, positive}) => {
    return (
        <table>
            <tbody>
                <TableLine statTitle={"good"} statValue={good}/>
                <TableLine statTitle={"neutral"} statValue={neutral}/>
                <TableLine statTitle={"bad"} statValue={bad}/>
                <TableLine statTitle={"all"} statValue={all}/>
                <TableLine statTitle={"average"} statValue={average}/>
                <TableLine statTitle={"positive"} statValue={positive}/>
            </tbody>
        </table>
    )
}

const App = () => {
    //states
    const [clicks, setClicks] = useState (
            {
                good: 0,
                neutral: 0,
                bad: 0,
            })

    const [selected, setSelected] = useState(0)

    //variables 
    let goodF = 0
    let neutralF = 0
    let badF = 0
    const allClicks = (clicks.good + clicks.neutral + clicks.bad)
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    //state handlers
    const handleGoodClick = () => {
        setClicks({...clicks, good: clicks.good + 1})
        goodF = goodF + 1
    }
    const handleNeutralClick = () => {
        setClicks({...clicks, neutral: clicks.neutral + 1})
        neutralF = neutralF + 1
    }
    const handleBadClick = () => {
        setClicks({...clicks, bad: clicks.bad + 1})
        badF = badF + 1
    }

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * anecdotes.length)
    }

    //render
    return(
        <>
            <h3>give feedback</h3>

            <Button handleClick={handleGoodClick} text={"Good"} />
            <Button handleClick={handleNeutralClick} text={"Neutral"} />
            <Button handleClick={handleBadClick} text={"Bad"} />

            <div>
            <h3>statistics</h3>
            </div>
            {allClicks === 0 ? 
                <p>{"No Feedback given"}</p> :
                <MainStats good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} all={allClicks} average={(clicks.good - clicks.bad / allClicks) || 0} positive={(((clicks.good/allClicks) || 1) * 100).toFixed(2)}/>
            }

            <section>
                {anecdotes[generateRandomNumber()]}
            </section>
        </> 
        
    )
}

export default App