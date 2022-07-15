import { useEffect, useState } from 'react';
import './quotes.css';

function Quote() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');


    useEffect(() => {
        getQuote()
    }, []);
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f0df06bd31mshccdb344dd77484dp1c588ajsn96a1d89f622c',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    
    const getQuote = () => {
        fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => {
        console.log(response.originator.name)
         setQuote(response.content);
         setAuthor(response.originator.name)
         if(response.content.length > 150) {
            console.log('fuck');
            getQuote()
         }
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="quote-block">
            <div className="quote">
                {quote}
                </div>
            <div className="author">
                {author}
                </div>
            <button className='floating-button' 
            onClick={getQuote}
            >
                Get a quote</button>
        </div>

    );
}

export default Quote;