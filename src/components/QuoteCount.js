import useQuotes from "../useQuotes";

const QuoteCount = () => {
  const { totalQuoteCount } = useQuotes()
  
  return (

      <div>
        {totalQuoteCount === 0 && <h4>No quotes!</h4>}
           <p>Total quote count: {totalQuoteCount}</p>
      </div>

  );
};
 
export default QuoteCount;