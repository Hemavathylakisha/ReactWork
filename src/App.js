import logo from './logo.svg';
import './App.css';
import Form from './components/form';

function App() {
  return (
    <div className="App container">
        <div class="one">
        <h1>React Assignment Form</h1>
        </div>
        <div class="contentbox">
          {/* UserForm module4 component */}
          <h3>User Form</h3>
                <Form />
        </div>
    </div>
  );
}

export default App;
