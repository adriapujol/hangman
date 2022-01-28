import React, { useState, useEffect } from 'react';
import './App.scss';
import Keyboard from './components/Keyboard';


function App() {


  const [lives, setLives] = useState(8);
  const [gameOver, setGameOver] = useState(false);
  const [word, setWord] = useState("pana");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);


  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keys3 = ["solve", "z", "x", "c", "v", "b", "n", "m", "enter"];

  const validInput = new RegExp('[aA-zZ]');



  const letters = word.split("");
  const uniqueLetters = [...new Set(letters)];


  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  useEffect(() => {
    if (!gameOver) {
      checkWin(uniqueLetters, correctGuesses);
      if (lives === 0) {
        console.log("LOSE!")
        setGameOver(true);
      };
    }
    console.log("game checked");
  }, [correctGuesses, gameOver]);




  const handleKeyPress = (e) => {
    e.preventDefault();
    checkLetter(e.key);
  }
  const handleLetterClick = (e) => {
    e.preventDefault();
    checkLetter(e.target.value);
  }

  const checkWin = (uniqueLetters, rightGuesses) => {
    if (uniqueLetters.length === rightGuesses.length) {
      console.log("YOU WIN");
    }
  }

  const checkLetter = (letter) => {
    let letterFormated = letter.toLowerCase();

    if (letterFormated.match(validInput) && !correctGuesses.includes(letterFormated) && !wrongGuesses.includes(letterFormated)) {

      if (letters.includes(letterFormated)) {
        setCorrectGuesses(currentGuesses => [...currentGuesses, letterFormated]);
      } else {
        setWrongGuesses([...wrongGuesses, letterFormated]);
        setLives(currentLives => currentLives - 1);
      }
    };
  }

  return (
    <div className="wrapper">
      <nav className='nav'>
        <div className="nav-content">
          <div className="logo">H</div>
          <div className="title">Hangman</div>
          <button className="info">?</button>
        </div>
      </nav>
      <section className="game">
        <div className="word">
          {
            letters.map((letter, index) => {
              const toShow = correctGuesses.includes(letter);
              return (
                <div className="letter-box" key={index}>
                  <div className={toShow ? "show" : "hide"} >{letter}</div>
                </div>
              )
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
            let styles = (k === "enter" || k === "solve") ? "key one-and-half" : "key";
            return <button className={styles} id={k} key={index} value={k} onClick={handleLetterClick} >{k}</button>
          })}
        </div>

      </section>
    </div>
  );
}

export default App;
