import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useSound from 'use-sound';
import decrementSound from '../sounds/https___apihost.ru_storage_temp_is_free_extra_666c5439a834d285376558.mp3';
import decrement10Sound from '../sounds/https___apihost.ru_storage_temp_is_free_extra_666c5439a834d285376558.mp3';
import { increment, decrement, incrementByAmount, decrementByAmount, reset } from '../redux/counterReducer';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const [playDecrement] = useSound(decrementSound);
    const [playDecrement10] = useSound(decrement10Sound);

    const handleDecrement = () => {
        if (count > 0) {
            dispatch(decrement())} else {
            playDecrement();
        }
    }

    const handleDecrementByAmount = (amount) => {
        if (count > 0) {
            dispatch(decrementByAmount(amount))} else {
            if (amount === 10) {playDecrement10()}
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            <button onClick={() => handleDecrementByAmount(10)}>-10</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;