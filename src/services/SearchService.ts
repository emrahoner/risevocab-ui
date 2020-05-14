import config from './ConfigService'

class SearchService {
    private endpoint: string;

    constructor() {
        this.endpoint = config.getConfig('API_ENDPOINT')
        this.endpoint = this.endpoint.endsWith('/') ? 
            this.endpoint.substring(0, this.endpoint.length - 1) : 
            this.endpoint
    }
    async search(word: string) {
        const response = await fetch(`${this.endpoint}/search/${word}`)
        const json = await response.json()
        return json.entry.wordTypes.reduce(
            (wordTypes: any[], wordType: any) => {
                return [
                    ...wordTypes,
                    ...wordType.definitions.reduce(
                        (definitions: any[], definition: any) => {
                            return [
                                ...definitions, 
                                {
                                    word: json.entry.word,
                                    pronunciationUrl: wordType.pronunciations[0].url,
                                    pronunciationText: wordType.pronunciations[0].pronunciation,
                                    wordType: wordType.wordType,
                                    definition: definition.definition,
                                    sentences: definition.sentences
                                }
                            ]
                        },
                        []
                    )
                ]
            },
            []
        )
    }
    async suggestions(word: string) {
        return await Promise.resolve([word])
    }
}

export default SearchService
