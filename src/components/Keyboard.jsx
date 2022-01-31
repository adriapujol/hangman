import React from 'react';
import Key from './Key';

function Keyboard({ checkLetter, correctGuesses, wrongGuesses }) {

    const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const keys3 = ["solve", "z", "x", "c", "v", "b", "n", "m", "enter"];

    const guesses = [...correctGuesses, ...wrongGuesses];

    return (
        <section className="keyboard">
            <div className="row">
                {keys1.map((k, index) => {
                    let classStyle = guesses.includes(k) ? "key clicked" : "key";
                    return <Key letter={k} checkLetter={checkLetter} classStyle={classStyle} key={index} />
                })}
            </div>
            <div className="row">
                <div className="blank half"></div>
                {keys2.map((k, index) => {
                    let classStyle = guesses.includes(k) ? "key clicked" : "key";
                    return <Key letter={k} checkLetter={checkLetter} classStyle={classStyle} key={index} />
                })}
                <div className="blank half"></div>
            </div>
            <div className="row">
                {keys3.map((k, index) => {
                    let classStyle = "key";
                    if (k === "enter" || k === "solve") {
                        classStyle = classStyle + " one-and-half";
                    }
                    if (guesses.includes(k)) {
                        classStyle = classStyle + " clicked";
                    };
                    return <Key letter={k} checkLetter={checkLetter} classStyle={classStyle} key={index} />
                })}
            </div>

        </section>
    );
}

export default Keyboard;
