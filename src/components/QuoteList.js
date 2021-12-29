import Quote from "./Quote";

const QuoteList = ({quotes}) => {

    return (
        <div>
            <h3>Quotes</h3>
        {
            quotes.map(quote => {
                return (
                    <Quote quote={quote.quote}/> //..
                )
            })
        }
        </div>
    )
    
}
 
export default QuoteList;