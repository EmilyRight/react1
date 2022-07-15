import Clocks from '../clocks/clocks';
import Quote from '../quotes/quotes';
import Weather from '../weather-info/weather-info';
import Greeting from '../greeting/greeting';
import './app.css';
import { useEffect, useState } from 'react';



function App() {
    
    const [img, setImg] = useState('');

    let clientID = "WuPWpf0NxljM1fSF1k8YBUSbXUVg8PoyhDYIA8BdYiE" 
    let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}&query=nature&count=10`;
    console.log('dddd', img);
    // useEffect(()=> {
        fetch(endpoint)
        .then((res) => {
            return res.json()}) 
        .then((jsonData)=> {
            // const randomNum = Math.floor(Math.random()*10 + 1)
            console.log(jsonData, 'jjkk');
            setImg(jsonData[0].urls.full);
        })

    console.log(img);
    return (
        <div className="app" style={{ backgroundImage: `url(${img})` }}>
            <Weather/>
            <Greeting/>
            <Clocks/>
            <Quote/>
        </div>
    );
}

export default App;
