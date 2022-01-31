import React, { useState } from 'react';

function Key({ letter, checkLetter, classStyle }) {

    const [clicked, setClicked] = useState(false);

    const styles = (letter === "enter" || letter === "solve") ? "key one-and-half wrong" : "key";

    const handleClick = (e) => {
        e.preventDefault();
        checkLetter(e.target.value)
        setClicked(true);
    }

    return (
        <button
            className={classStyle}
            id={letter}
            value={letter}
            onClick={handleClick} >
            {letter}
        </button>
    )
};

export default Key;
