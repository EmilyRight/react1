import './greeting.css'
import { useContext, useEffect, useState } from 'react';
import { TimeContext } from '../clocks/timeContext';

const Greeting = (()=> {
    const time = useContext(TimeContext);
    const [name, setName] = useState(localStorage.getItem('name'));
    // useEffect(()=>{
    //     setUserName()
    // }, [])
        
     
    const setUserName = (event) => {
        if(event.key === 'Enter') {
            setName(event.target.value);
            localStorage.setItem('name', event.target.value);
        }
    }

    const handleInput = (eve) => {
            setName('');
    }

    // const greeting = () => {
    //     let time = 
    // }
    
    return(
        <div className="greeting-block">
            <TimeContext.Provider value='dgffh'>
            <div className="greeting">Hello, </div>
            </TimeContext.Provider>
            {!name ? <input type="text" className="user-name input-field" placeholder='Enter your name' onKeyPress={setUserName} onChange={handleInput}/>
            : name}
            <div className="name">!</div>
        </div>
    )
})
export default Greeting;