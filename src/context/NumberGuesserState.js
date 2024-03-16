import React, { useState } from 'react';
import YourGuessContext from './NumberGusserContext';

const NumberGuesserState = (props) => {
    const [guess, setGuess] = useState(0);

    return (
        <YourGuessContext.Provider value={{ guess, setGuess }}>
            {props.children}
        </YourGuessContext.Provider>
    );
}
export default NumberGuesserState;