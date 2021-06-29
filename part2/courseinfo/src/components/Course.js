const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <>
        {parts.map(el => <p key={el.id}>{el.name}:  {el.exercises}</p>)}
      </>
    )
  }
  
  const Total = ({ parts }) => {
    console.log(parts)
    return (
      <>
        <p>Number of exercises: {parts.reduce((s, p) => s + p.exercises, 0)}</p>
      </>
    )
  }

const Course = ({ course }) => {
    console.log(course)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course