import "./App.css";
import Catergory from "./Components/Catergory";
import Pages from "./Pages/Pages";
import {Br} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Catergory />
      <Pages />
    </div>
  );
}

export default App;
