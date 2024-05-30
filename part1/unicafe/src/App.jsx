import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Text = (props) => (
  <tr>
  <td>{props.text}</td> <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  var all = props.good + props.bad + props.neutral
  if (all == 0) {
    return <p>no feedback given</p>
  }
  var average = ((props.good - props.bad)/all).toFixed(2)
  var positive = ((props.good)/all).toFixed(2)
  return <div>
  <Text text="good" value={props.good} />
  <Text text="neutral" value={props.neutral} />
  <Text text="bad" value={props.bad} />
  <Text text="all" value={all} />
  <Text text="average" value={average} />
  <Text text="positive" value={positive} />
  </div>
  
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App