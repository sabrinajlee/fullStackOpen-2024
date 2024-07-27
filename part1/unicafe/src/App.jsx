import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Title = ({ text }) => (
  <div> 
    <h1>{text}</h1>
  </div>
)

const Statistics = ({ feedback, num }) => (
  <div>
    <p1>{feedback}: {num}</p1>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    console.log(good)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <Title text='Unicafe Feedback Poll' />
      <p>Please click the button below that best describes your experience at Unicafe.</p>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Title text='Statistics' />
      <Statistics feedback='Good' num={good} />
      <Statistics feedback='Neutral' num={neutral} />
      <Statistics feedback='Bad' num={bad} />

    </div>
  )
}


export default App