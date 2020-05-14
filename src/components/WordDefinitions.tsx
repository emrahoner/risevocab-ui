import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SearchService from '../services/SearchService'
import WordDefinition from './WordDefinition'
import { useSwipeable } from 'react-swipeable'

function WordDefinitions () {
    const { word } = useParams()
    const [definitions, setDefinitions] = useState<any>()
    const [definitionIndex, setDefinitionIndex] = useState<number>(0)

    useEffect(() => {
        const searchService = new SearchService()
        searchService.search(word).then(result => {
            setDefinitions(result)
        })
    }, [word])

    const swipeHandlers = useSwipeable({ 
        onSwiped: (event) => { 
            if(!definitions || !definitions.length) return

            if(event.dir === 'Left') {
                if(definitionIndex < definitions.length - 1)
                    setDefinitionIndex(definitionIndex + 1)
            } else if(event.dir === 'Right') {
                if(definitionIndex > 0)
                    setDefinitionIndex(definitionIndex - 1)
            } 
        }
    })
    
    return (
        <>
            {
                definitions && definitions.length ? (
                    <div className="slide-container dictionary">
                        <div className="slide" {...swipeHandlers} style={{ width: `${definitions.length * 100}%`, marginLeft: `-${definitionIndex * 100}%` }}>
                            {
                                definitions.map((definition: any, index: number) => (
                                    <div key={`definition-${index}`} className="slide-item p-5">
                                        <WordDefinition definition={definition}></WordDefinition>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : undefined
            }
        </>
    )
}

export default WordDefinitions