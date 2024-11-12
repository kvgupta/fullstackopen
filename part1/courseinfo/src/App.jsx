const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};
const Content = ({
  parts
}) => {
  return (
    parts.map(part => <Part part={part.name} exercises={part.exercises} key={part.name}/>)
  );
};

const Total = ({ parts }) => {
  const getSum = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p>Number of exercises {getSum}</p>;
};

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
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
