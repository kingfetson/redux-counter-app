// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>🔢 Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '1rem' }}>
        ➖ Decrement
      </button>
    </div>
  );
}

export default App;
