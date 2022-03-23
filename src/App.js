import React, { useState } from "react";
import './App.css';

export default function App() {

  //to get 2 different random number 1 -100
  let randomizerA = Math.floor(Math.random() * 100) + 1;
  let randomizerB = Math.floor(Math.random() * 100) + 1;

  //const for hiding
  const [hide, setHide] = useState(false);

  //const for 2 numbers
  const [randomA, setRandomA] = useState(randomizerA);
  const [randomB, setRandomB] = useState(randomizerB);

  //const for higher or lower
  const [choices, setChoices] = useState("");

  //const for messages
  const [note, setNote] = useState("");
  const [out, setOut] = useState("")

  //function to set choices
  const higherChoice = () =>{
    setChoices("Higher");
      if(Number(randomA) > Number(randomB)){
        setNote("You Lose! The 2nd Number is lower than the 1st Number.");
        setOut("Better Luck Next Time");
        setHide(true);
      }
      else if(Number(randomA) < Number(randomB)){
        setNote("You Win! The 2nd number is higher than the 1st number.");
        setOut("Another Round?");
        setHide(true);
      }
  };

  const lowerChoice = () =>{
    setChoices("Lower");
      if(Number(randomA) > Number(randomB)){
        setNote("You Win! The 2nd Number is lower than the 1st Number.");
        setOut("Another Round?");
        setHide(true);
      }
      else if(Number(randomA) < Number(randomB)){
        setNote("You Lose! The 2nd number is higher than the 1st number.");
        setOut("Better Luck Next Time");
        setHide(true);
      }
  };

  //newGame
  const newGame = () => {
    setHide(false);
    setNote("");
    setChoices("");
    setOut("");
    setRandomA(randomizerA);
    setRandomB(randomizerB);
  };

  return (
    <div>
      {/* div for title and mechanics */}
      <div className="mainbody">
        <div className="top">
          <h1><span>Numbers Game: Higher or Lower</span></h1>
          <h3>Mechanics</h3>
          <p>
            The player will be shown a number and he/she has <br/>
            to guess if the 2nd is higher or lower than the first.<br/>
            The numbers range from 1 - 100.
          </p>
        </div>

        <div className="bot">
          {/* div for choices */}
          <div className="left">
            <p><span>The 1st Random Number is <u>{randomA}</u></span></p>
            <button hidden = {hide} onClick={higherChoice} className="btn">Higher</button>
            <button hidden = {hide} onClick={lowerChoice} className="btn">Lower</button>
            {hide &&
              <button onClick= {newGame} className="btn2">Try Again</button>
            }
          </div>
          <div className="mid"></div>
          {/* div for output messages */}
          <div className="right">
            <p hidden = {hide}><span>Make Your Choice</span></p>
            {hide &&
              <div className="inright"><p>
                Your choice was {choices}.<br/>
                The 2nd Random Number was {randomB}.<br/>
                {note}<br/>
                {out}  
              </p></div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
