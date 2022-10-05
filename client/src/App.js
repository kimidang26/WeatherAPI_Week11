// import './App.css';
import Header from "./components/header.js";
import Display from "./components/weatherdisplay.js"

function App() {
  return (
    <div className="App">
      <header className="App-main">
        <Header />
        <Display />
      </header>
    </div>
  );
}

export default App;
