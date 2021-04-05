import React, {useState, useEffect} from 'react'
import styles from "./App.css"

const App = () => {
    const [clicks, setClicks] = useState(
        {
            left: 0,
            right: 0,
        }
    )

    useEffect(() => {    
        document.title = `left: ${clicks.left} - right: ${clicks.right}`
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