import React from 'react';
import './NextRound.css'

export default function NextRound({ onclick, nextBtnEnable }) {
    return (
        <div id='next-round'>
            <button onClick={onclick} disabled={nextBtnEnable}>Next Round</button>
        </div>
    )
}
