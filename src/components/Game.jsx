import React from 'react';
import head from '../img/head.png';
import body from '../img/body.png';
import armLeft from '../img/armLeft.png';
import armRight from '../img/armRight.png';
import legRight from '../img/legRight.png';
import legLeft from '../img/legLeft.png';
import rope from '../img/rope.png';
import woodS from '../img/woodS.png';
import woodM from '../img/woodM.png';
import woodL from '../img/woodL.png';

function Game({ correctGuesses, lives, letters }) {
    return (
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
                    <img src={woodL} className={lives < 10 ? "" : "hide"} alt="wood" />
                    <img src={woodM} className={lives < 9 ? "" : "hide"} alt="wood" />
                    <img src={woodS} className={lives < 8 ? "" : "hide"} alt="wood" />
                    <img src={body} className={lives < 5 ? "" : "hide"} alt="body" />
                    <img src={rope} className={lives < 7 ? "" : "hide"} alt="rope" />
                    <img src={head} className={lives < 6 ? "" : "hide"} alt="head" />
                    <img src={armLeft} className={lives < 4 ? "" : "hide"} alt="arm" />
                    <img src={armRight} className={lives < 3 ? "" : "hide"} alt="arm" />
                    <img src={legLeft} className={lives < 2 ? "" : "hide"} alt="leg" />
                    <img src={legRight} className={lives < 1 ? "" : "hide"} alt="leg" />
                </div>
            </div>
        </section>
    )
}

export default Game