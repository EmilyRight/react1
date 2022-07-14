import { useEffect, useState } from 'react';
import './clocks.css'

const Clocks = () => {
    const date = new Date();
    const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    const [time, setTime] = useState(date.toLocaleTimeString());
   
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    const currentDate = dayOfWeek[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + ", " + date.getFullYear()
    return (
        <div className="date-info">
            <div className="clocks-block">{time}</div>
            <div className="date-block">{currentDate}</div>
        </div>
    )
}

export default Clocks;