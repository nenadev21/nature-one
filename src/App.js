import "./App.css";
import Weather from "./Weather";
import ForecastSection from "./ForecastSection";
import Footer from "./Footer";




function App() {
return (
  <div className="App">
    <div className="container">
    <div className="weather-app-wrapper">
      <Weather defaultCity="Barcelona"/>
        <ForecastSection />
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default App;
