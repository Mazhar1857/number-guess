import React from 'react';
import './ToggleButton.css'

export default function ToggleButton({ incrementFunc, decreamentFunc, guess }) {
    return (
        <div id='toggle-button'>
            <button className='left' onClick={decreamentFunc} disabled={guess<=0?true:false}>-</button>
            <button className='right' onClick={incrementFunc} disabled={guess>=10?true:false}>+</button>
        </div>
    )
}
