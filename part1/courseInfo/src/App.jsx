const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <div>
      <Part part={props.parts[0]} exercise={props.parts[0]}/>
      <Part part={props.parts[1]} exercise={props.parts[1]}/>
      <Part part={props.parts[2]} exercise={props.parts[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)

  const total = props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}
export default App
