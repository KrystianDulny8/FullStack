import React from 'react'

// Header wyświetla nazwę kursu
const Header = ({ name }) => <h1>{name}</h1>

// Content wyświetla wszystkie części kursu
const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ))}
  </div>
)

// Total oblicza sumę ćwiczeń za pomocą reduce
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><strong>Total exercises: {total}</strong></p>
}

// Course łączy Header, Content i Total
const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10, id: 1 },
      { name: 'Using props to pass data', exercises: 7, id: 2 },
      { name: 'State of a component', exercises: 14, id: 3 },
      { name: 'Redux' , exercises: 11, id: 4}
    ]
  }

  return <Course course={course} />
}

export default App
