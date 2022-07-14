import Clocks from '../clocks/clocks';
import Quote from '../quotes/quotes';
import Weather from '../weather-info/weather-info';
import './app.css';

function App() {

    return (
        <div className="app">
            <Weather/>
            <Clocks/>
            <Quote/>
        </div>
    );
}

export default App;