// header component
const Header = () => {

  return (
    <div>
      <h1>Half stack application development </h1>
    </div>
  )
}

// content component 
const Content = () => {
  const part1 = "Fundamentals of React"
  const part2 = "Using props to pass data"
  const part3 = "State of a component"
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14
  const totalExercises = (exercise1 + exercise2 + exercise3)
  console.log(totalExercises) // had to check the total
  
  return (
    <div>
      <p>{part1}, {exercise1}</p>
      <p>{part2}, {exercise2}</p>
      <p>{part3}, {exercise3}</p>

    </div>
  )
}

// total component
const Total = () => {
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14
  const totalExercises = (exercise1 + exercise2 + exercise3)
  console.log(totalExercises) // had to check the total

  return (
    <div>
      <p><b>Number of exercises = {totalExercises}</b></p>
    </div>
  )
}

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
