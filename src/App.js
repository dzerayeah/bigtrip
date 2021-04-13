import logo from './logo.svg';
import './App.css';

import Tour from './components/Tour/Tour'
import ToursList from './components/ToursList/ToursList'

function App() {

  const tours = [
    {
      name: "Tour",
      price: "543",
      dates: "14-18",
      operators: "Operators",
      theme: "Theme",
      cities: "Cities",
      fee: "321"
    },
    {
      name: "Tour",
      price: "543",
      dates: "14-18",
      operators: "Operators",
      theme: "Theme",
      cities: "Cities",
      fee: "321"
    },
    {
      name: "Tour",
      price: "543",
      dates: "14-18",
      operators: "Operators",
      theme: "Theme",
      cities: "Cities",
      fee: "321"
    }
  ]

  return (
    <div className="App">
      <ToursList tours={tours} />
    </div>
  );
}

export default App;
