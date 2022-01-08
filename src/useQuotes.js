import { useContext } from "react";
import { AppContext } from "./app-context";

const useQuotes = () => {
    const [state, setState] = useContext(AppContext)

    const loadQuotes = async () => {
        const API_URL = "https://api.kanye.rest/"

        let response = await fetch(API_URL)

        let data = await response.json()

        console.log(data)
        // console.log("loaded a quote")

        //saveQuotes(data.quote)
        addQuote(data.quote)
    }
    
    const addQuote = (quote) => {
        let new_quotes = [...state.quotes, quote]
        setState({...state, quotes: new_quotes })
    }

    const deleteQuote = (q) => {
        let new_quotes = state.quotes.filter((quote) => {
        return !(
            q.quote === quote.quote
        )
        })
        setState({...state, quotes: new_quotes })
    }

    // const filterQuotes = () => {

    //       let filtered = state.quotes.filter((quote) => {
    //         return (
    //           quote[state.filterby]
    //             .toString()
    //             .toLowerCase()
    //             .indexOf(state.searchWord.toLowerCase()) !== -1
    //         );
    //       });
    //       setState({ ...state, filteredSongs: filtered });
        
    //   };

    // const saveQuotes = (quote) => {
    //     // let all_quotes = {...state.quotes, quotes}
    //     // setState({...state, quotes: all_quotes})

    //     // let all_quotes = [...state.quotes, ...quotes]
    //     // setState({...state, quotes: all_quotes})
    // }

    return {
        filteredQuotes: state.filteredQuotes,
        quotes: state.quotes,
        addQuote,
        deleteQuote,
        loadQuotes,
        quoteAdd: addQuote,
        totalQuoteCount: state.quotes.length,
    }
}

export default useQuotes