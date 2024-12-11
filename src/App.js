import './App.css';
import Search from './components/SearchBar/Search'
import Member from './components/Member/Member'
import Button from './components/Buttons/Button'

function App() {
  return (
    <div className="App">
      <h2>Add members to Front-End development team</h2>
      <Search />
        <Member />
      <Button/>
    </div>
  );
}

export default App;
