import React, {useState} from 'react'

const Button = ( {handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const LineStatistics = (props) => {
    return (
        <li>{props.text}: {props.value}</li>
    )
}

const Stats = (props) => {
    return (
        <h3>{props.text}</h3>
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
    
    //variables 
    let goodF = 0
    let neutralF = 0
    let badF = 0
    const allClicks = (clicks.good + clicks.neutral + clicks.bad)

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

    //render
    return(
        <>
            <h3>give feedback</h3>

            <Button handleClick={handleGoodClick} text={"Good"} />
            <Button handleClick={handleNeutralClick} text={"Neutral"} />
            <Button handleClick={handleBadClick} text={"Bad"} />

            <div>
            <h3>statistics</h3>
            <ul>
                <LineStatistics text={"good"} value={clicks.good}/>
                <LineStatistics text={"neutral"} value={clicks.neutral}/>
                <LineStatistics text={"bad"} value={clicks.bad}/>
                <LineStatistics text={"all"} value={allClicks}/>
                <LineStatistics text={"average"} value={(clicks.good - clicks.bad / allClicks) || 0}/>
                <LineStatistics text={"positive"} value={((clicks.good/allClicks) || 1) * 100}/>
            </ul>
            </div>

        </> 
        
    )
}

export default App