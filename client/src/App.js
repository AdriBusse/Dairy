import React from 'react';
import './App.css';

import DayList from './components/DayList';
import FloatingButton from "./components/FloatingButton";
import AddEvent from "./components/AddEvent";

function App() {
  return (
    <div className="App container">
      <h1>Hello Page: Today: </h1>
      <AddEvent/>

      <DayList/>


    </div>
  );
}

export default App;
