import { useEffect, useState } from 'react';
import './weather-info.css';

const Weather = () => {
    let [city, setCity] = useState('');
    let [temp, setTemp] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);

    const handleClear = (e) =>  {
        e.preventDefault()
        setCity('')
      }
    function changeCity(event) {
        setCity(event.target.value);
     }
    
    // useEffect(() => {
    //     fetch(`https://api.weatherbit.io/v2.0/current?&lang=ru&city=${city}&key=5ba4c1fca49f4537855e6cd0b3a52840&include=minutely`)
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data)
    //         // setCity(data.data[0].city_name);
    //         setTemp(data.data[0].temp);
    //         setHumidity(Math.round(data.data[0].rh));
    //         setWind(data.data[0].wind_spd.toFixed(2))
    //     })
    // },[temp])

    const searchLocation = (event) => {
        if(event.key === 'Enter') {
            fetch(`https://api.weatherbit.io/v2.0/current?&lang=ru&city=${city}&key=5ba4c1fca49f4537855e6cd0b3a52840&include=minutely`)
            .then(response => response.json())
            .then(data => {
                setCity(data.data[0].city_name);
                setTemp(data.data[0].temp);
                setHumidity(Math.round(data.data[0].rh));
                setWind(data.data[0].wind_spd.toFixed(2))
             .then(()=> handleClear(event))   
        })
        handleClear()
    }}

    return(
        <div className="weather-block">
            <input type="text" className='location' value={city} placeholder='Enter your city' onChange={changeCity} onKeyPress={searchLocation}/>
            <div className="weather-data">
                <div className="city">Your city: {city}</div>
                <div className="temp">Temperature: {temp} °C</div>
                <div className="humidity">Relative humidity: {humidity}%</div>
                <div className="wind-speed">Wind speed: {wind} м/с</div>
            </div>
        </div>
    )
}

export default Weather;