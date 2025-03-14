import { useState } from 'react';
import List from './components/List';

function App() {
  const [list, setList] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new formData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input placeholder="Nome da task"></input>
        <button>Adicionar</button>
      </form>
      <List list={list}/>
    </div>
  );
}

export default App;
