import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import axiosOptions from './helpers/axiosOptions';
import './App.scss';
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';
import GameOverInfo from './components/GameOverInfo';
import Solve from './components/Solve';
import Game from './components/Game';
import words from './words.json';





function App() {

  const [loading, setLoading] = useState(true);
  const [lives, setLives] = useState(10);
  const [playerWin, setPlayerWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [word, setWord] = useState("word");
  const [definition, setDefinition] = useState("");
  const [won, setWon] = useState(0);
  const [played, setPlayed] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [showGameOverInfo, setShowGameOverInfo] = useState(false);
  const [showSolve, setShowSolve] = useState(false);


  const validInput = new RegExp('[aA-zZ]');

  const letters = useMemo(() => word.split(""), [word]);
  const uniqueLetters = useMemo(() => [...new Set(letters)], [letters]);

  const startGame = useCallback(() => {
    setLoading(true);

    axios.request(axiosOptions).then(function (response) {
      setWord(response.data[0].word.toLowerCase());
      setDefinition(response.data[0].definition);
      setLoading(false);
    }).catch(function (error) {
      let num = getRandomNumber(0, 21);
      setWord(words[num]);
      setLoading(false);
    });

    setPlayerWin(false);
    setGameOver(false);
    setWrongGuesses([]);
    setCorrectGuesses([]);
    setLives(10);
    setShowGameOverInfo(false);

  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (lives < 1) return setGameOver(true);
  }, [lives]);

  useEffect(() => {
    checkWin(uniqueLetters, correctGuesses);
  }, [correctGuesses, uniqueLetters]);

  useEffect(() => {
    if (gameOver) {
      if (playerWin) setWon(prevWon => prevWon + 1);
      setPlayed(prevPlayed => prevPlayed + 1);
      setShowGameOverInfo(true);
    }
  }, [gameOver, playerWin]);



  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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
      {showGameOverInfo && <GameOverInfo word={word} definition={definition} playerWin={playerWin} startGame={startGame} />}
      {showSolve && <Solve setShowSolve={setShowSolve} word={word} setPlayerWin={setPlayerWin} setGameOver={setGameOver} />}
      <Navbar won={won} played={played} />
      <Game correctGuesses={correctGuesses} lives={lives} letters={letters} />
      <Keyboard checkLetter={checkLetter} correctGuesses={correctGuesses} wrongGuesses={wrongGuesses} showSolve={showSolve} setShowSolve={setShowSolve} loading={loading} />
    </div>
  );
}

export default App;
