import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <div class="one">
      <h1>React Navigation Assignment </h1>
      </div>
      <div class="contentbox">
         {/* module 5 component */}       
                <h1>Welcome to the User Posts App</h1>
                <Link to="/users">View Users</Link>
           
      </div>
    </div>
  );
}

export default App;
