import React, { useState, useEffect } from 'react';
import './App.scss';


function App() {


  const [word, setWord] = useState("juniper");

  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keys3 = ["delete", "z", "x", "c", "v", "b", "n", "m", "enter"];

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  })


  const letters = word.split("");

  console.log(letters);

  const handleKeyPress = (event) => {
    event.preventDefault();
    console.log(event.key)

    // console.log(e);
  }
  const handleLetterClick = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }


  return (
    <div className="wrapper">
      <nav className='nav'>
        <div className="logo">H</div>
        <div className="title">Hangman</div>
        <button className="info">?</button>
      </nav>
      <section className="game">
        <div className="word">
          {
            letters.map((letter, index) => {
              return <div className={`letter l${index}`} key={index}>{letter}</div>
            })
          }
        </div>
        <div className="board">
          <div className="background">

          </div>
          <div className="hangman">

          </div>
        </div>
      </section>
      <section className="keyboard">
        <div className="row">
          {keys1.map((k, index) => {
            return <button className="key" id={k} key={index} value={k} onClick={handleLetterClick} >{k}</button>
          })}
        </div>
        <div className="row">
          <div className="blank half"></div>
          {keys2.map((k, index) => {
            return <button className="key" id={k} key={index} value={k} onClick={handleLetterClick}>{k}</button>
          })}
          <div className="blank half"></div>
        </div>
        <div className="row">
          {keys3.map((k, index) => {
            let styles = (k === "enter" || k === "delete") ? "key one-and-half" : "key";
            return <button className={styles} id={k} key={index} value={k} onClick={handleLetterClick} >{k}</button>
          })}
        </div>

      </section>
    </div>
  );
}

export default App;
