import React, {useState, useEffect} from 'react'
import styles from "./App.css"

const Hello = (props) => {
    const {name, age} = props
    const bornYear = () => new Date().getFullYear()- age 

    return(
        <section>
                <p>
                    Hello {name}, you are {age} years old
                </p>
                <p> So you we probably born in {bornYear()}</p>
        </section>
    )
}


const App = () => {
    const name = "Peter Jackson"
    const age = 51

    const [timer, setTimer] = useState(0)
    setTimeout(
        () => setTimer(timer + 1), 1000
    )

    const [clicks, setClicks] = useState(
        {
            left: 0,
            right: 0,
        }
    )

    useEffect(() => {    
        document.title = `Time elapsed: ${timer}`
    })

    const handleLeftClick = () => {
        setClicks({...clicks, left: clicks.left + 1})
    }

    const handleRightClick = () => {
        setClicks({...clicks, right: clicks.right + 1})
    }

    return (
        <>
            <div>
                {timer}
            </div>
            <div>
                <h1>greetings</h1>
                <Hello name={"Maya"} age={26+10} />
                <Hello name={name} age={age} />
            </div>
            
            <div>
                {clicks.left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {clicks.right}
            </div>
        </>
      
    )
  }

export default App
//npm start