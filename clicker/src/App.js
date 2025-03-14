import React, { useState } from 'react';
import Counter from "./components/counter/Counter";
import Clicker from './components/counter/Clicker';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div class="App">
      <div class="container">
        <Counter count={count}/>
        <Clicker onIncrement={ handleIncrement }/>
      </div>
    </div>
  );
}

export default App;
