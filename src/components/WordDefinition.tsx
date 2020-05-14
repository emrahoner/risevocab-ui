import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

function WordDefinition (props: any) {

    const pronunciate = (event:any) => {
        event.currentTarget.querySelector('audio').play()
    }

    const definition = props.definition
    
    return (
        <>
            {
                definition? (
                    <Card className="full-height">
                        <CardContent>
                            <Typography variant="h5" component="h2" className="pt-20">
                                {definition.word}
                                <span className="right" onClick={pronunciate}>
                                    <VolumeUpIcon />
                                    <audio src={definition.pronunciationUrl}></audio>
                                </span>
                            </Typography>
                            <Typography variant="body2" component="p">
                                {definition.pronunciationText}
                            </Typography>
                            <Typography color="textSecondary" className="italic">
                                {definition.wordType}
                            </Typography>
                            <Typography variant="body2" component="p" className="pt-10 pb-10">
                                {definition.definition}
                            </Typography>
                            {
                                definition.sentences.map(
                                    (sentence: string, index: number) => (
                                        <Typography key={`sentence-${index}`} variant="body2" component="p" className="">
                                            {sentence}
                                        </Typography>
                                    )
                                )
                            }
                        </CardContent>
                    </Card>
                ) : undefined
            }
        </>
    )
}

export default WordDefinition