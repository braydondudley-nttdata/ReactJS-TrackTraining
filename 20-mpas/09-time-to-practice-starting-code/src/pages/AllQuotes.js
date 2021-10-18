import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
    { id: 'q1', author: 'Max', text: 'this is a description' },
    { id: 'q2', author: 'Max1', text: 'this is a new description' },
    { id: 'q3', author: 'Max2', text: 'this is a newer description' }
]

function AllQuotes() {
    return (
        <QuoteList quotes={DUMMY_DATA}/>
    )
}

export default AllQuotes
