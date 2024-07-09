import './App.css';
import {useDocTitle} from './components/customHook';

function App() {
  const[doctitle, setDocTitle]=useDocTitle("React - Module 3");
  return (
    <div className="App container">
           <div class="one">
            <h1>React Assignment module 3</h1>
            </div>
            <div class="contentbox">
                {/* Title change module3 component */}
              <h5>Title change use customHook</h5>
              <button class="button" onClick={() => setDocTitle("React Title Change Assignment")}>
                Change title
              </button>
            </div>
    </div>
  );
}

export default App;
