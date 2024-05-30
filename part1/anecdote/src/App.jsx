import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const points = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(points)
  const [indexmaxvote, setIndexMaxVote] = useState(0)

  console.log(vote)

  const updateObject = () => {
    const newObject = [...vote]
    newObject[selected] = newObject[selected] + 1
    setVote(newObject)
  }

  const updateMaxVotes = () => {
    const indexOfMaxValue = vote.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    setIndexMaxVote(indexOfMaxValue)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))}>next anecdote</button>
      <p>has {vote[selected]} votes</p>
      <button onClick={() => {updateObject(); updateMaxVotes()}}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexmaxvote]}</p>
      <p>has {vote[indexmaxvote]} votes</p>
    </div>
  )
}

export default App