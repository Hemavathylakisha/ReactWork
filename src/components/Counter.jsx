import React from 'react';
import {useSelector} from 'react-redux';


function Counter() {
    const value = useSelector(state => state.counter.value);
    
    return (
    <div>
       <h2>React Redux - counter</h2>
       <p>value: {value}</p>
       
    </div>
  );
}

export default Counter;
