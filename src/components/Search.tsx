import React from 'react'
import { TextField } from '@material-ui/core'
import SearchSuggestions from './SearchSuggestions'

function Search () {
    const [word, setWord] = React.useState('')
    return (
        <div className="m-10">
            <TextField placeholder="Type the word to search" fullWidth onChange={ (event) => { setWord(event.target.value) } } />
            <SearchSuggestions word={word}></SearchSuggestions>
        </div>
    )
}

export default Search