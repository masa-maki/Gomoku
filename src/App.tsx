import { useState } from 'react';
import './App.css';

function Square() {
  return <button className="square">X</button>;
}
function Cercle() {
  return <button className="square">O</button>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>aaa</h1>
      <Square />
      <Cercle />
    </>
  );
}

export default App;
