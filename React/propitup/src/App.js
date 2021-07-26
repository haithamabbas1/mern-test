import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import PersonCardF from './components/PersonCardF';

function App() {
  return (
    <div className="App">
      <PersonCard name="Doe,Jane" age={45} color="Black" />
      <PersonCard name={"Haitham,Abbas"} age={23} color={"Blue"} />
      <PersonCard name={"Khaleel,Mutaz"} age={99} color={"Pink"} />
      <h1>Functional Components</h1>
      <PersonCardF firstName="Haitham" lastName="Abbas" age={23} hairColor="brown"></PersonCardF>
    </div>
  );
}

export default App;
