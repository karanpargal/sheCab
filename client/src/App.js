
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import BookCab from './components/Platform/BookCab';
import ReactDOM from "react-dom/client";


function App() {
  return (
    <div className='bg-LavenderBlue'>
      <Navbar />
      <Landing />
      {/* <BookCab /> */}
    </div>
  );
}

export default App;
