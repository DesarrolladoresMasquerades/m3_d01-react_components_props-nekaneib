import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Greetings from "./components/Greetings";
function App() {

  return (
    <div className="App">
    <Navbar />
    <Greetings message = {"We love React!"}/>
    </div>
  );
}

export default App;
