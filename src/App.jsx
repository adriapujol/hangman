import React, { useState, useEffect } from 'react';
import './App.scss';
import Keyboard from './components/Keyboard';


function App() {


  const [lives, setLives] = useState(10);
  const [playerWin, setPlayerWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [word, setWord] = useState("caramelo");
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
  }, [correctGuesses, wrongGuesses]);

  useEffect(() => {
    if (lives < 1) return setGameOver(true);
  }, [lives]);

  useEffect(() => {
    checkWin(uniqueLetters, correctGuesses);
  }, [correctGuesses]);

  useEffect(() => {
    if (gameOver) {
      playerWin ? alert("YOU WON") : alert("YOU LOST!");
    }
  }, [gameOver])


  const handleKeyPress = (e) => {
    e.preventDefault();
    if (!gameOver) checkLetter(e.key);
  }
  const handleLetterClick = (e) => {
    e.preventDefault();
    if (!gameOver) checkLetter(e.target.value);

  }

  const checkWin = (uniqueLetters, rightGuesses) => {
    if (uniqueLetters.length === rightGuesses.length) {
      setPlayerWin(true);
      setGameOver(true);
    }
  }

  const checkLetter = (letter) => {
    let letterFormated = letter.toLowerCase();
    // console.log("Paraula: ", uniqueLetters);
    // console.log("Lletra Input: ", letterFormated);
    // console.log("Llista encerts: ", correctGuesses);
    // console.log("Llista fallos: ", wrongGuesses);
    // console.log("Lletra a encerts: ", correctGuesses.includes(letterFormated));
    // console.log("Lletra a fallos: ", wrongGuesses.includes(letterFormated));

    if (letterFormated.match(validInput) && (!correctGuesses.includes(letterFormated)) && (!wrongGuesses.includes(letterFormated))) {

      if (uniqueLetters.includes(letterFormated)) {
        setCorrectGuesses(currentWrongGuesses => [...currentWrongGuesses, letterFormated]);
      } else {
        setWrongGuesses(currentGuesses => [...currentGuesses, letterFormated]);
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
            <div className={lives < 10 ? "structure st1" : "structure st1 hide"}></div>
            <div className={lives < 9 ? "structure st2" : "structure st2 hide"}></div>
            <div className={lives < 8 ? "structure st3" : "structure st3 hide"}></div>
            <div className={lives < 7 ? "rope" : "rope hide"}></div>
            <div className={lives < 6 ? "man head" : "man head hide"}></div>
            <div className={lives < 5 ? "man body" : "man body hide"}></div>
            <div className={lives < 4 ? "man limbs arm1" : "man limbs arm1 hide"}></div>
            <div className={lives < 3 ? "man limbs arm2" : "man limbs arm2 hide"}></div>
            <div className={lives < 2 ? "man limbs leg1" : "man limbs leg1 hide"}></div>
            <div className={lives < 1 ? "man limbs leg2" : "man limbs leg2 hide"}></div>
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
            let styles = (k === "enter" || k === "solve") ? "key one-and-half wrong" : "key";
            return <button className={styles} id={k} key={index} value={k} onClick={handleLetterClick} >{k}</button>
          })}
        </div>

      </section>
    </div>
  );
}

export default App;
