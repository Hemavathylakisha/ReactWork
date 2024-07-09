import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice';

function CounterChange() {
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(5))
    }
  return (
    <>
      <h2>Counter Change</h2>
      <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleIncrementByAmount}>incrementBy 5</button>
    </>
  );
}

export default CounterChange;
