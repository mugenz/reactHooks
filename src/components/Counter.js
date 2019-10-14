//USE MEMO
import React, { useState, useMemo } from 'react';

const Counter = () => {
    const [counterOne, SetCounterOne] = useState(0)
    const [counterTwo, SetCounterTwo] = useState(0)

    const incrementOne = () => {
        SetCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        SetCounterTwo(counterTwo + 1)
    }
    
    const isEven = useMemo(
        () => {
             let i = 0;
             while (i < 2000000000) i++
             return counterOne % 2 === 0
         }, [counterOne])

    return (
        <>  
        <div>
            <button onClick={incrementOne}>Counter one { counterOne }</button>
            <span>{ isEven ? 'Even' : 'Odd' }</span>
         </div>
        <div>    
            <button onClick={incrementTwo}>Counter two { counterTwo }</button>
        </div>
        </>
    );
};

export default Counter;