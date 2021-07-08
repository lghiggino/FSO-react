import {useState, useEffect} from "react"
import axios from "axios"
import './App.css';

function App() {
  const [fruits, setFruits] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/fruits").then(response => {
      setFruits(response.data)
    })
  },[])
  
  return (
    <div className="App">
      {fruits.map(el => (
        <div key={el.id}>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
