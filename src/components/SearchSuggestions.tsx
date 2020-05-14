import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import SearchService from '../services/SearchService'

function SearchResult (props: any) {
    const history = useHistory()
    const [suggestions, setSuggestions] = useState<string[]>();
    
    useEffect(() => {
        const searchService = new SearchService()
        searchService.suggestions(props.word).then(result => {
            setSuggestions(result)
        })
    }, [props.word])
    
    return (
        <div>
            <List component="nav">
                {
                    suggestions?.map(suggestion => (
                        <ListItem key={suggestion} button onClick={() => { history.push(`/word/${suggestion}`) }}>
                            <ListItemText primary={ suggestion } />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default SearchResult