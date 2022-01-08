import { useEffect } from 'react'
import FilterBy from './components/FilterBy'
import Title from './components/Title'
import FetchQuote from './components/FetchQuote'
import QuoteList from './components/QuoteList'
import QuoteCount from './components/QuoteCount'
import useQuotes from './useQuotes'

function App() {
 const { loadQuotes } = useQuotes();
 useEffect(() => {
  loadQuotes()
 }, [])

  return (
    <div style={{ backgroundColor: "gray", padding: "2em" }}>
    <div>

      <Title appname="Kanye Oneliners" />

      <FilterBy />

      <QuoteCount />

      <FetchQuote />

      <QuoteList />

    </div>
    </div>
  );
}

export default App;