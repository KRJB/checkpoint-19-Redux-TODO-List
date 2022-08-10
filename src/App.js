import './App.css';
import ListTask from './components/ListTask';

function App() {
  return (
    <div id='glob' >
        <h1 style={{margin:'0 0 50px 0',fontFamily: 'Oleo Script Swash Caps'}}> My TODO List</h1>
        <ListTask/>
    </div>
  );
}

export default App;
