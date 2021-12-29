import { useState } from 'react'

import FilterBy from './components/FilterBy'
import Title from './components/Title'
import FetchQuote from './components/FetchQuote'
import QuoteList from './components/QuoteList'
import QuoteCount from './components/QuoteCount'

function App() {
  const [quotes] = useState([
    {quote: "quote 1"},
    {quote: "quote 2"},
    {quote: "quote 3"},
    {quote: "quote 4"},
    {quote: "quote 5"},
])

  return (

    <div style={{ backgroundColor: "gray", padding: "2em" }}>
    <div>
      <Title appname="Kanye Oneliners" />

      <FilterBy />

      <QuoteCount quotes={quotes}/>

      <FetchQuote quotes={quotes}/>

      <QuoteList quotes={quotes} />

    </div>
    </div>
  );
}
//tämä on aika roska, meni myöhäiseksi kiireisempien kurssien takia. en halunnut käyttää koko joululomaa sen parissa
export default App;
