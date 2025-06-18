// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('counterState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('counterState', serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: loadState(), // 👈 Load persisted state
});

// Save the Redux state to localStorage whenever it changes
store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
  });
});

export { store };
