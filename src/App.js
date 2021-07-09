
import './App.css';
import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <PersonCard last_name="Walters" first_name="Sean" age={45} hair_color="Black"/>
      <PersonCard last_name="Murphy" first_name="Tara" age={38} hair_color="Brown"/>
      <PersonCard last_name="Walters" first_name="Ronan" age={4} hair_color="Brown"/>
      <PersonCard last_name="Bobo" first_name="Friendly" age={1} hair_color="Brown"/>
    </div>
  );
}

export default App;
