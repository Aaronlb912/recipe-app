import "./App.css";
import Catergory from "./Components/Catergory";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Catergory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
