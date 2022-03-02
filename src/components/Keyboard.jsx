import React, { useState, useEffect } from 'react';
import Key from './Key';



function Keyboard({ checkLetter, correctGuesses, wrongGuesses }) {

    const [keyBoardKeys, setKeyBoardKeys] = useState(
        {
            q: "", w: "", e: "", r: "", t: "", y: "", u: "", i: "", o: "", p: "",
            a: "", s: "", d: "", f: "", g: "", h: "", j: "", k: "", l: "",
            solve: "", z: "", x: "", c: "", v: "", b: "", n: "", m: "", enter: ""
        }
    );

    useEffect(() => {
        document.addEventListener("keypress", handlePress);
        return () => document.removeEventListener("keypress", handlePress);
    });

    const handlePress = (e) => {
        const currentKey = e.key.toLowerCase();
        e.preventDefault();
        setKeyBoardKeys(prevKeyboardKeys => Object.assign({}, prevKeyboardKeys, { [currentKey]: "clicked" }));
        checkLetter(currentKey);

        setTimeout(() => {
            setKeyBoardKeys(prevKeyboardKeys => Object.assign({}, prevKeyboardKeys, { [currentKey]: "" }));
        }, 200);
    }

    const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const keys3 = ["solve", "z", "x", "c", "v", "b", "n", "m"];

    const guesses = [...correctGuesses, ...wrongGuesses];

    return (
        <section className="keyboard">
            <div className="row">
                {keys1.map((k, index) => {
                    let classStyle = guesses.includes(k) ? `key used ${keyBoardKeys[k]}` : `key ${keyBoardKeys[k]}`;
                    return <Key letter={k} checkLetter={checkLetter} classStyle={classStyle} key={index} />
                })}
            </div>
            <div className="row">
                <div className="blank half"></div>
                {keys2.map((k, index) => {
                    let classStyle = guesses.includes(k) ? `key used ${keyBoardKeys[k]}` : `key ${keyBoardKeys[k]}`;
                    return <Key letter={k} checkLetter={checkLetter} classStyle={classStyle} key={index} />
                })}
                <div className="blank half"></div>
            </div>
            <div className="row">
                {keys3.map((k, index) => {
                    let classStyle = `key ${keyBoardKeys[k]}`;
                    if (guesses.includes(k)) {
                        classStyle = classStyle + " used";
                    };
                    if (k === "enter" || k === "solve") {
                        classStyle = classStyle + " one-and-half";
                    }
                    return <Key letter={k} checkLetter={checkLetter} classStyle={classStyle} key={index} />
                })}
            </div>

        </section>
    );
}

export default Keyboard;
