import React, { useEffect, useRef, useState } from 'react'

const Timer = ({minutes}) => {

    const [timer, setTimer] = useState({minutes:minutes, seconds:minutes*60});

    let timerInterv =  useRef(null);

    const doCountDown = () =>
    {
        setTimer((prev)=>({...prev, seconds:(--timer.seconds)}))
        
        if (--timer.seconds<=0)
        { 
            setTimer({minutes:0, seconds:0});
            clearInterval(timerInterv.current);
            return;
        }
    }

    useEffect(()=>
    {
        timerInterv.current = setInterval(doCountDown, 1000);
    },[]);

    return (
        <>
            <p>{parseInt(timer.seconds/60)} minutes, {timer.seconds%60} seconds</p>
        </>
    )

}

export default Timer