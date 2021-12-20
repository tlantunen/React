//import React from 'react';
import FilterBy from './components/FilterBy'
import Title from './components/Title'
import Quote from './components/Quote'
import AddQuote from './components/AddQuote'
import QuoteList from './components/QuoteList'

function App() {
  return (

    <div>
      <Title appname="Kanye Oneliners"/>

      <FilterBy />

      <AddQuote />

      <QuoteList />

    </div>
  );
}

export default App;
