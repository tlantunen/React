// import { useContext } from "react";
// import { AppContext } from "../app-context";
import useQuotes from "../useQuotes";

const FetchQuote = ({ quote }) => {
  // const [state, setState] = useContext(AppContext)
  // const { quoteAdd } = useQuotes()
  
  const { deleteQuote } = useQuotes()
  const { loadQuotes } = useQuotes()

  const quoteAllDelete = () => {
    deleteQuote({ quote })    
  }
    
  const addQuote = () => {
    // let q = {}
    // quoteAdd(q)
    loadQuotes()
  }

  return (

      <div>
        <input onClick={addQuote} type="button" value="Add a quote" />
        <input onClick={quoteAllDelete} type="button" value="Delete all quotes" />        
      </div>
    
  );
};

export default FetchQuote;