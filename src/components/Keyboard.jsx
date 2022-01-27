import React from 'react';

function Keyboard({ handleLetterClick, correctGuesses, wrongGuesses }) {


    return (
        <section className="keyboard">
            {/* <div className="row">
                <button className="key" id={k} key={index} value={k} onClick={handleLetterClick} >{k}</button>
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
            </div> */}

        </section>
    );
}

export default Keyboard;
