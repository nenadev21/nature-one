import "./App.css";
import Search from "./Search";
import CityAndCountry from "./CityAndCountry";
import DayAndTime from "./DayAndTime";
import DateAndYear from "./DateAndYear";
import WeatherToday from "./WeatherToday";
import Conditions from "./Conditions";
import ForecastSection from "./ForecastSection";
import Footer from "./Footer";




function App() {
return (
    <div className="App">
    <div className="weather-app-wrapper">
     
        <Search />
        <CityAndCountry />
        <div className="row">
          <div className="col-6">
            <DayAndTime />
            <DateAndYear />
          </div>
          <div className="col-6">
            <WeatherToday />
          </div>
        </div>

        <Conditions />
        <ForecastSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
