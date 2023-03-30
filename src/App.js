import './App.css';
import MultiSearchBar from './components/MultiSearchBar';
import Header from './components/Header';
import ListHospitals from './components/ListHospitals';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="center-container">
        <div id="multi-search-container">
          <MultiSearchBar />
        </div>
        <div className="list-hospitals-container">
          <ListHospitals />
        </div>
      </div>
    </div>
  );
}

export default App;
