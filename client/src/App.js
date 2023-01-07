
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import BookCab from './components/Platform/BookCab';
import ReactDOM from "react-dom/client";
import GetRide from './components/Platform/GetRide';


function App() {
  return (
    <div className='bg-LavenderBlue'>
      <Navbar />
      <Landing />
      {/* <GetRide /> */}
    </div>
  );
}

export default App;
