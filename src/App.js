import React, {useState} from 'react'

const Button = ( {handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
    //states
    const [vote, setVote] = useState([0,0,0,0,0,0])
    const [selected, setSelected] = useState(0)
    const [mostVoted, setMostVoted] = useState(0)

    //variables 
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    //state handlers
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * anecdotes.length)
        return randomNumber === selected ? generateRandomNumber() : randomNumber
    }
    
    const generateAnecdote = () => {
        const randomNumber = generateRandomNumber()
        setSelected(randomNumber) 
        checkMostVoted()
    }

    const upvoteAnecdote = () => {
        const mappedVotes = vote.map((el,idx) => {
            return (idx === selected) ? el = el + 1 : el
        })
        setVote(mappedVotes)
        checkMostVoted()
    }

    function checkMostVoted(){
        const maxVoted = Math.max(...vote)
        const maxVotedIndex = vote.indexOf(maxVoted)
        const filteredMaxeds = []
        vote.forEach((el, idx) => {
            if (el === maxVoted){
                filteredMaxeds.push(idx)
            }
        })
        console.log(filteredMaxeds)
        //iterate by filteredMaxeds and render N number os strings of maxVoted
        setMostVoted(maxVotedIndex)
    }

    //render
    return(
        <>
            <section>
                <h1>Anecdote of the day</h1>
                {anecdotes[selected]}
            </section>
            <section>
                <Button handleClick={generateAnecdote} text={"generate another anecdote"} />
                <Button handleClick={upvoteAnecdote} text={"Upvote"} />
                <p> this anecdote current score is {vote[selected]}</p>
            </section>
            <section>
                <h2>Most Voted Anecdote</h2>
                <p>{anecdotes[mostVoted]}</p>
            </section>
        </> 
        
    )
}

export default App