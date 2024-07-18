import React, { useState } from "react";
import quotes from "./task_3/QuoteList";
import Display from "./task_3/Display";
import './App3.css';

function App3() {
    const initialQuote = { name: "", sentence: "-" };
    const [quote, setQuote] = useState(initialQuote);

    function getRandom(quotes) {
        const random = Math.floor(Math.random() * quotes.length);
        return quotes[random];
    }

    function handleClick() {
        setQuote(getRandom(quotes));
    }

    function handleReset() {
        setQuote(initialQuote);
    }

    return (
        <fieldset>
            <legend>TASK 3</legend>
            <button className='btn3' onClick={handleClick}>quote of the day</button>
            <Display className='display' sentence={quote.sentence} name={quote.name} />
            <button className='btnReset3' onClick={handleReset}>reset</button>
        </fieldset>
    );
}

export default App3;
