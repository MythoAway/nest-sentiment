export interface SentimentData {
    score: number,
    comparative: number,
    calculation: Score[],
    tokens: string[],
    words: string[]
    positive: string[],
    negative: string[]
}

type Score = {
    [key: number]: any
}