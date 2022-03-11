import React, { useState } from 'react';

function Key({ letter, checkLetter, classStyle, setShowSolve, loading }) {

    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        if (loading) return
        setClicked(true);
        checkLetter(e.target.value);
        setTimeout(() => setClicked(false), 200);
    }
    const handleShowSolve = (e) => {
        e.preventDefault();
        setShowSolve(true);
    }

    return (
        <button
            className={clicked ? classStyle + " clicked" : classStyle}
            id={letter}
            value={letter}
            onClick={letter === "solve" ? handleShowSolve : handleClick}
        >
            {letter}
        </button>
    )
};

export default Key;
