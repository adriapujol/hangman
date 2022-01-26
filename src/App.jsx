import React, { useState } from 'react';
import './App.scss';


function App() {


  const [word, setWord] = useState("juniper");

  const keys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "delete", "z", "x", "c", "v", "b", "n", "m", "enter"];
  const letters = word.split("");

  console.log(letters);


  return (
    <div className="wrapper">
      <nav className='nav'>
        <div className="logo">Hangman</div>
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
        <div className="hangman">
          <div className="background">

          </div>
          <div className="hang-parts">

          </div>
        </div>
      </section>
      <section className="keyboard">
        {keys.map((k, index) => {
          return <div className="key" key={index}>{k}</div>
        })}
      </section>
    </div>
  );
}

export default App;
