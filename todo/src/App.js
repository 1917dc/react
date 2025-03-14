import { useState } from 'react';

function App() {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
      if(inputValue.trim() === '') return;
      setItems([...items, inputValue]);
      setInputValue('');
    }

    return (
    <div>
        <input
            placeholder="Task"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add item</button>
        <h1>To Do:</h1>
        <ul>
            {items.map((item) => (
                <li>{ item }</li>
            ))}
        </ul>
    </div>
    );
}

export default App;
