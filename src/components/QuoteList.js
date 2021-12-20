import Quote from "./Quote";
import { useState } from "react";




const QuoteList = () => {
    const [quotes, setQuotes] = useState([
        {quote: "tässä quote 1"},
        {quote: "tässä quote 2"},
        {quote: "tässä quote 3"},
        {quote: "tässä quote 4"},
    ])
    return (
        <div>
        {
            quotes.map(quote => {
                return (
                    <Quote quote={quote.quote}/>
                )
            })
        }
        </div>
    )
}

export default QuoteList;