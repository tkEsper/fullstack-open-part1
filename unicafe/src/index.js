import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ name, func }) => {
  return <button onClick={func}>{name}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral, all }) => {
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text={"good"} value={good} />
          <Statistic text={"neutral"} value={neutral} />
          <Statistic text={"bad"} value={bad} />
          <Statistic text={"all"} value={all} />
          <Statistic text={"average"} value={(good - bad) / all} />
          <Statistic text={"positives"} value={`${(good / all) * 100}%`} />
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;
  return (
    <div>
      <h1>give feedback</h1>
      <Button name={"good"} func={() => setGood(good + 1)} />
      <Button name={"neutral"} func={() => setNeutral(neutral + 1)} />
      <Button name={"bad"} func={() => setBad(bad + 1)} />
      {all === 0 ? (
        <p>no feedback given</p>
      ) : (
        <Statistics good={good} bad={bad} neutral={neutral} all={all} />
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
