import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSEARCH from 'youtube-api-search'

const API_KEY = 'AIzaSyDxe6TuLRDBwol_kv0QJUDFMpTmlnqd7rg';

YTSEARCH({key:API_KEY, term:'surfboards'}, function(data){
  console.log(data)
})

const App = () => {
    return(
      <div>
        <SearchBar placeholder="Searching ..." />
      </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));