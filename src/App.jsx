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
import background from './img/background.jpg';


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


  // useEffect(() => {
  //   window.addEventListener("keypress", handleKeyPress);
  //   return () => window.removeEventListener("keypress", handleKeyPress);
  // }, [correctGuesses, wrongGuesses]);

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
          <div className="logo">H</div>
          <div className="title">Hangman</div>
          <button className="info">?</button>
        </div>
      </nav>
      <section className="game">

        <img src={background} alt="Background" />
        <img src={woodL} alt="Structure" className={lives < 10 ? "structure st1" : "structure st1 hide"} />
        <img src={woodM} alt="Structure" className={lives < 9 ? "structure st2" : "structure st2 hide"} />
        <img src={woodS} alt="Structure" className={lives < 8 ? "structure st3" : "structure st3 hide"} />
        <img src={body} alt="Body" className={lives < 5 ? "man body" : "man body hide"} />
        <img src={rope} alt="Rope" className={lives < 7 ? "rope" : "rope hide"} />
        <img src={head} alt="Head" className={lives < 6 ? "man head" : "man head hide"} />
        <img src={armLeft} alt="Left arm" className={lives < 4 ? "man limbs arm1" : "man limbs arm1 hide"} />
        <img src={armRight} alt="Right arm" className={lives < 3 ? "man limbs arm2" : "man limbs arm2 hide"} />
        <img src={legLeft} alt="Left leg" className={lives < 2 ? "man limbs leg1" : "man limbs leg1 hide"} />
        <img src={legRight} alt="Right leg" className={lives < 1 ? "man limbs leg2" : "man limbs leg2 hide"} />

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
        <div className="hangman">
          {/* <img src={background} alt="Background" />
          <img src={woodL} alt="Structure" />
          <img src={woodM} alt="Structure" />
          <img src={woodS} alt="Structure" />
          <img src={rope} alt="Rope" />
          <img src={head} alt="Head" />
          <img src={body} alt="Body" />
          <img src={armLeft} alt="Left arm" />
          <img src={armRight} alt="Right arm" />
          <img src={legLeft} alt="Left leg" />
          <img src={legRight} alt="Right leg" /> */}
          {/* <div className={lives < 10 ? "structure st1" : "structure st1 hide"}></div>
          <div className={lives < 9 ? "structure st2" : "structure st2 hide"}></div>
          <div className={lives < 8 ? "structure st3" : "structure st3 hide"}></div>
          <div className={lives < 7 ? "rope" : "rope hide"}></div>
          <div className={lives < 6 ? "man head" : "man head hide"}></div>
          <div className={lives < 5 ? "man body" : "man body hide"}></div>
          <div className={lives < 4 ? "man limbs arm1" : "man limbs arm1 hide"}></div>
          <div className={lives < 3 ? "man limbs arm2" : "man limbs arm2 hide"}></div>
          <div className={lives < 2 ? "man limbs leg1" : "man limbs leg1 hide"}></div>
          <div className={lives < 1 ? "man limbs leg2" : "man limbs leg2 hide"}></div> */}
        </div>
      </section>
      <Keyboard checkLetter={checkLetter} correctGuesses={correctGuesses} wrongGuesses={wrongGuesses} />
    </div>
  );
}

export default App;
