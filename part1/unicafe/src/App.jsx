import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Text = (props) => (
  <p>{props.text} {props.value}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = (good/all)*100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Text text="good" value={good} />
      <Text text="neutral" value={neutral} />
      <Text text="bad" value={bad} />
      <Text text="all" value={all} />
      <Text text="average" value={average} />
      <Text text="positive" value={positive} />
    </div>
  )
}

export default App