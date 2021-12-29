function QuoteCount({quotes}) {

    return (
    
    <div>

      {quotes.length === 0 &&
      <h4>No quotes!</h4>
      }
       
        <h4>Total quote count: {quotes.length} </h4>
        <h4>Quotes in view: {quotes.length} </h4>

      </div>

    );
}
 
export default QuoteCount;
