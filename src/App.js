import Adder from './components/Adder';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>
          足し算器
        </h1>
      </header>
      <main>
        <Adder />
      </main>
    </div>
  );
}

export default App;
