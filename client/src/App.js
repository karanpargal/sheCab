import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features/Features";
import Team from "./components/Team/Team";
import FutureScope from "./components/FutureScope/FutureScope";

function App() {
  return (
    <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400">
      <Navbar />
      <Landing />
      <Features />
      <FutureScope />
      <Team />
    </div>
  );
}

export default App;
