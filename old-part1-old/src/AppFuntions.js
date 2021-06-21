import React, {useState, useEffect} from 'react'
import styles from "./App.css"

const History = ({allClicks}) => {
    if (allClicks.length === 0){
        return (
            <div>
                The app is used by pressing the buttons
            </div>
        )
    } else{
        return (
            <div>
                <p>Click history: {allClicks.join(" - ")}</p>
            </div>
        )
    }
}

const Button = ( {handleClick, text} ) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
    //hooks
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])
    const [value, setValue] = useState(10)

    useEffect(() => {    
        document.title = `Left: ${left} - Right: ${right}`
    })

    //functions - handlers
    const handleLeftClick = () => {
        setLeft(left + 1)
        setAllClicks(allClicks.concat("L"))
    }

    const handleRightClick = () => {
        setRight(right + 1)
        setAllClicks(allClicks.concat("R"))
    }

    const hello = (who) => () => { console.log("hello", who); }

    const makeIntoValue = (number) => () => {setValue(number)}

    //render
    return (
        <>
            <section>
                <div>
                    {left}
                    <Button handleClick={handleLeftClick} text={"left"} />
                    <Button handleClick={handleRightClick} text={"right"}/>
                    {right}
                </div>
                <History allClicks={allClicks}/>
            </section>
            <section>
                <div>
                    {value}
                </div>
                <Button handleClick={makeIntoValue(100)} text={"Make it 100"} />
                <Button handleClick={makeIntoValue(value + 1)} text={"Add 1"} />
                <Button handleClick={makeIntoValue(0)} text={"reset value to zero"} />                
                {/*  legacy code below*/}
                <button onClick={() => {setValue(value - 1)}}>Remove 1</button>
                <button onClick={makeIntoValue(-200)}>Make it -200</button>
                 {/* end of legacy */}
            </section>
            <section>
                <button onClick={hello("world")}>world</button>
                <button onClick={hello("james")}>james</button>
                <button onClick={hello("dino")}>dino</button>
            </section>
        </>
      
    )
  }

export default App
//npm start