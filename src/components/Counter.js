import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus, plus10, minus10, reset } from '../redux/Store'

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state)
    const audioRef = useRef(null)
    useEffect(() => {
        if (count < 0 && audioRef.current) {audioRef.current.play()
        }
    }, [count])

    const handlePlus = () => {
        dispatch(plus())
    }

    const handleMinus = () => {
        if (count > 0) {
            dispatch(minus())
        } else {
            console.log("Счетчик не может уйти ниже нуля!")}}

    const handlePlus10 = () => {
        dispatch(plus10())}

    const handleMinus10 = () => {
        if (count > 0 ) {
            dispatch(minus10())} else {
            console.log("Счетчик не может уйти ниже 0!")
        }
    }

    const handleReset = () => {
        alert('Вы уверены, что хотите сбросить счетчик?')
            dispatch(reset())
        }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Счетчик: {count}</h1>
            <button onClick={handlePlus}>+1</button>
            <button onClick={handleMinus}>-1</button>
            <button onClick={handlePlus10}>+10</button>
            <button onClick={handleMinus10}>-10</button>
            <button onClick={handleReset}>Reset</button>
            <audio ref={audioRef} src="/sound/https___apihost.ru_storage_temp_is_free_extra_666c5439a834d285376558.mp3" />
        </div>
    )
}

export default Counter;
