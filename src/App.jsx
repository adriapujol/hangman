import React, { useState, useEffect } from 'react';
import './App.scss';
import Keyboard from './components/Keyboard';
import head from './img/head.png';
import body from './img/body.png';
import armLeft from './img/armLeft.png';
import armRight from './img/armRight.png';
import legRight from './img/legRight.png';
import legLeft from './img/legLeft.png';
import rope from './img/rope.png';
import woodS from './img/woodS.png';
import woodM from './img/woodM.png';
import woodL from './img/woodL.png';



function App() {


  const [lives, setLives] = useState(10);
  const [playerWin, setPlayerWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [word, setWord] = useState("caramelo");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);


  const validInput = new RegExp('[aA-zZ]');



  const letters = word.split("");
  const uniqueLetters = [...new Set(letters)];


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
    if (gameOver) return;

    if (letterFormated.match(validInput) && (!correctGuesses.includes(letterFormated)) && (!wrongGuesses.includes(letterFormated))) {

      if (uniqueLetters.includes(letterFormated)) {
        setCorrectGuesses(currentWrongGuesses => [...currentWrongGuesses, letterFormated]);
      } else if (!(letterFormated === "solve" || letterFormated === "enter")) {
        setWrongGuesses(currentGuesses => [...currentGuesses, letterFormated]);
        setLives(currentLives => currentLives - 1);
      }
    };
  }

  return (
    <div className="wrapper">
      <nav className='nav'>
        <div className="nav-content">
          <div className="info">
            <button>?</button>
          </div>
          <div className="title">Hangman</div>
          <div className="score">score: 0/0</div>
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
        <div className="hangman-wrapper">
          <div className="hangman">
            <img src={woodL} className={lives < 10 ? "" : "hide"} />
            <img src={woodM} className={lives < 9 ? "" : "hide"} />
            <img src={woodS} className={lives < 8 ? "" : "hide"} />
            <img src={body} className={lives < 5 ? "" : "hide"} />
            <img src={rope} className={lives < 7 ? "" : "hide"} />
            <img src={head} className={lives < 6 ? "" : "hide"} />
            <img src={armLeft} className={lives < 4 ? "" : "hide"} />
            <img src={armRight} className={lives < 3 ? "" : "hide"} />
            <img src={legLeft} className={lives < 2 ? "" : "hide"} />
            <img src={legRight} className={lives < 1 ? "" : "hide"} />
          </div>
        </div>
      </section>
      <Keyboard checkLetter={checkLetter} correctGuesses={correctGuesses} wrongGuesses={wrongGuesses} />
    </div>
  );
}

export default App;
