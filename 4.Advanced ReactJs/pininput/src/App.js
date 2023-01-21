import logo from './logo.svg';
import './App.css';
import { PinInput } from './components/PinInput';

function App() {
  return (
    <div className="App">
     <PinInput length={5} size={1} />
    </div>
  );
}

export default App;
