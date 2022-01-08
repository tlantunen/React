// import { useContext } from "react";
// import { AppContext } from "../app-context";

import useQuotes from "../useQuotes";
import QuoteStyle from "./QuoteStyle";

const QuoteList = () => {
    const { quotes } = useQuotes()
    console.log(quotes)

    return (
        <div>
            <h3>Quotes</h3>
                 
            {/* {quotes.map(({quote}) => (
                <li key={quote}>{quotes.quote}</li>
            ))} */}

            {/* <div>
                quote: {quotes.map((quote) => (
                    <div>{quotes.quote}</div>
                ))}
            </div> */}

            {/* {quotes.map(({ quote } ) => {
                return (
                   <li><QuoteStyle 
                    key={quote}
                    quote={ quote }
                    /></li>
                )
            })} */}
            

            {/* {quotes.map(quote => {
                return (
                    <li 
                    key={quote}>
                        {quote.quote}
                    </li>
                )
            })} */}

                        
            {quotes.map(quote => <li>{quote}</li>)} 
            {/* melkein meni yöunet tämän kanssa taistellessa :) */}

        </div>
    )
}
 
export default QuoteList;