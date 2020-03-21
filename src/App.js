import React from 'react';
import './stylesheets/style.css';
import SearchEngine from './components/SearchEngine';
import {SearchContextProvider} from "../src/components/searchContext";

function App() {
  return (
    <SearchContextProvider>
      <SearchEngine />
    </SearchContextProvider>
  )
}

export default App;