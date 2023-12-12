import { createSignal } from 'solid-js';
import './App.css';
import Home from './pages/Home.tsx';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
