const Course = ({courses}) => {
    
    const Header = ({name}) => <h1>{name}</h1>

    const Content = ({parts}) => {

      return (
        <>
          {parts.map((part) => 
            <p key={part.id}>
              {part.name} {part.exercises} 
            </p>
          )}
        </>
      )
    }

    const Total = ({parts}) => {
      const tot = parts.reduce((sum,curr) => sum + curr.exercises, 0 )

      return(
        <p>
          <b>total of {tot} exercises</b>
        </p>
      )
    }

    return (
      <>
        {courses.map((course) =>
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
           </div>
        )}
      </>
    )
  }

  export default Course