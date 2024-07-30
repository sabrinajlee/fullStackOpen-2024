import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ title, stat }) => (
  <tr>
    <td>{title}: </td>
    <td>{stat}</td>
  </tr>
    
)

const Statistics = (props) => {
  if (props.all === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine title={'Good'} stat={props.good}/>
        <StatisticLine title={'Neutral'} stat={props.neutral}/>
        <StatisticLine title={'Bad'} stat={props.bad}/>
        <StatisticLine title={'All'} stat={props.all}/>
        <StatisticLine title={'Average'} stat={props.average}/>
        <StatisticLine title={'Positive'} stat={`${props.positive * 100}%`}/>
        </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage( (updatedGood - bad) / updatedAll )
    setPositive(updatedGood / updatedAll)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setAverage( (good - bad) / updatedAll )
    setPositive(good / updatedAll)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage( (good - updatedBad) / updatedAll )
    setPositive(good / updatedAll)
  }

  return (
    <div>
      <h1>Unicafe Feedback Poll</h1>
      <p>Please click the button below that best describes your experience at Unicafe.</p>
      
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      
      <h1>Statistics</h1>
      
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />

    </div>
  )
}


export default App