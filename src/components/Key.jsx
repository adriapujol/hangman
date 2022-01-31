import React, { useState, useEffect } from 'react';

function Key({ letter, checkLetter, classStyle }) {

    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setClicked(true);
        console.log(e.target);
        checkLetter(e.target.value);
        setTimeout(() => setClicked(false), 200);
    }

    return (
        <button
            className={clicked ? classStyle + " clicked" : classStyle}
            id={letter}
            value={letter}
            onClick={handleClick}
        >
            {letter}
        </button>
    )
};

export default Key;
