// header component
const Header = () => {

  return (
    <div>
      <h1>Half stack application development </h1>
    </div>
  )
}

const Part = () => {
  return (
  )
}

// content component 
const Content = () => {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}

// total component
const Total = () => {
  
  return (
    <div>
      <p><b>Number of exercises = {totalExercises}</b></p>
    </div>
  )
}

const App = () => {
  const part1 = "Fundamentals of React"
  const part2 = "Using props to pass data"
  const part3 = "State of a component"
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14
  const totalExercises = (exercise1 + exercise2 + exercise3)


  return (
    <>
      <Header  />
      <Content />
      <Total />
    </>
  )
}


export default App
