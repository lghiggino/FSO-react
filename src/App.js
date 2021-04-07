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

const TableLine = (props) => {
    return (
        <tr>
            <td>{props.statTitle}</td>
            <td>{props.statValue}</td>
        </tr>
    )
}

const MainStats = (props) => {
    return (
        <table>
            <tbody>
                <TableLine statTitle={"good"} statValue={props.good}/>
                <TableLine statTitle={"neutral"} statValue={props.neutral}/>
                <TableLine statTitle={"bad"} statValue={props.bad}/>
                <TableLine statTitle={"all"} statValue={props.all}/>
                <TableLine statTitle={"average"} statValue={props.average}/>
                <TableLine statTitle={"positive"} statValue={props.positive}/>
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

            {/* <ul>
                {allClicks === 0 ? 
                    <li>{"No Feedback given"}</li> : 
                    <>
                        <LineStatistics text={"good"} value={clicks.good}/>
                        <LineStatistics text={"neutral"} value={clicks.neutral}/>
                        <LineStatistics text={"bad"} value={clicks.bad}/>
                        <LineStatistics text={"all"} value={allClicks}/>
                        <LineStatistics text={"average"} value={(clicks.good - clicks.bad / allClicks) || 0}/>
                        <LineStatistics text={"positive"} value={(((clicks.good/allClicks) || 1) * 100).toFixed(2)}/>
                    </>
                    }
                
            </ul> */}
            </div>
            {allClicks === 0 ? 
                <p>{"No Feedback given"}</p> :
                <MainStats good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} all={allClicks} average={(clicks.good - clicks.bad / allClicks) || 0} positive={(((clicks.good/allClicks) || 1) * 100).toFixed(2)}/>
            }
        </> 
        
    )
}

export default App