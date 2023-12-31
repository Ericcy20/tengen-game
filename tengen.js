import React from "react";
import "./main.css";
import Die from "./memesData";
export default function App() {
  const [dice, setDice] = React.useState(allNum());

  function refresh() {
    setDice(allNum());
  }

  function allNum() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  console.log(allNum());
  return (
    <main>
      <div className="dice-container"> {diceElements} </div>{" "}
      <button className="roll-dice" onClick={refresh}>
        Roll
      </button>
    </main>
  );
}
