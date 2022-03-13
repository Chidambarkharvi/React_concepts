import logo from './logo.svg';
import './App.css';
import CounterOne from './component/CounterOne';
import  CounterTwo  from './component/CounterTwo';

function App() {
  return (
    <div className="App">
    <CounterOne userName= "guru"/>
    <hr/>
    <CounterTwo/>
    </div>

  );
}

export default App;
