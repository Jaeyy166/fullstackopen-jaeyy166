// header component
const Header = () => {

  return (
    <div>
      <h1>Half stack application development </h1>
    </div>
  )
}

// content component 
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  const part1 = "Fundamentals of React"
  const part2 = "Using props to pass data"
  const part3 = "State of a component"
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14

  return (
    <div>
      <Part part={part1} exercise={exercise1}/>
      <Part part={part2} exercise={exercise2}/>
      <Part part={part3} exercise={exercise3}/>
    </div>
  )
}

// total component
const Total = (props) => {
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14
  const totalExercises = (exercise1 + exercise2 + exercise3)

  return (
    <div>
      <p>
        Number of exercises = {totalExercises.toString()}
      </p>
    </div>
  )
}

// app component 
const App = () => {
  return (
    <>
      <Header  />
      <Content />
      <Total />
    </>
  )
}


export default App
