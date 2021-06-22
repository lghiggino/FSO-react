const subjects = [
  {name: "George", age: "25"},
  {name: "Daisy", age: "21"},
  {name: "Emerald", age: "46"},
]

const Hello = ( {name, age} ) => {
  return(
    <p>Hello {name}! You are {age} years old.</p>
  )
}

function App() {
  const now = new Date().toDateString()
  const a = 10
  const b = 20
  return (
    <div>
      {subjects.map( (el,idx) => 
        <Hello key={idx} name={el.name} age={el.age}/>
      )}
      <p>
        {a} plus {b} is equal to {a + b}
      </p>
      <p>Today is: {now} </p>
    </div>
  );
}

export default App;
