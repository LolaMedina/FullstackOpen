import { useState } from "react";

// Header component 
const Header = props => <h1>{props.title}</h1>

//Button component
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  );
};

//StatsLine
const Stats = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr><td>{`${text} ${value}%`}</td></tr>
    );
  }
  return (
    <tr><td>{text} {value}</td></tr>
  );

};


// Statistics
const Statistics = ({ clicks }) => {
  // const { good, neutral, bad, } = props;
  const total = clicks.good + clicks.bad + clicks.neutral;
  const average = (clicks.good * 1 + clicks.bad * -1) / total;
  const percentage = (clicks.good / total) * 100;
  if (total === 0) {
    return (
      <p>No feedback given</p>
    );
  }
  return (
    <div>
      <table>
        <tbody>
          <Stats text="good" value={clicks.good} />
          <Stats text="neutral" value={clicks.neutral} />
          <Stats text="bad" value={clicks.bad} />
          <Stats text="total" value={total} />
          <Stats text="average" value={average.toFixed(2)} />
          <Stats text="positive" value={percentage} />
        </tbody>
      </table>
    </div>
  );
};



const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  //function to handle the click of  button
  const handleGoodClick = () => {
    const newClicks = {
      ...clicks, good: clicks.good + 1
    };
    setClicks(newClicks);
  };

  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks, neutral: clicks.neutral + 1
    };
    setClicks(newClicks);
  };

  const handleBadClick = () => {
    const newClicks = {
      ...clicks, bad: clicks.bad + 1
    };
    setClicks(newClicks);
  };
  return (
    <>
      <Header title="Unicafe Feedback" />
      <Button name="good" onClick={handleGoodClick} />
      <Button name="neutral" onClick={handleNeutralClick} />
      <Button name="bad" onClick={handleBadClick} />
      <Header title="Statistics" />
      <Statistics clicks={clicks} />
    </>
  );
};

export default App;
