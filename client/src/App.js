
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Features from './components/Features/Features';



function App() {
  return (
    <div className='bg-LavenderBlue'>
      <Navbar />
      <Landing />
      {/* <GetRide /> */}
      <Features />
    </div>
  );
}

export default App;
