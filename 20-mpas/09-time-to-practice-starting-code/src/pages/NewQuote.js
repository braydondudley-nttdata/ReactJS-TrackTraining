import React from 'react'
import { useHistory } from 'react-router'

import QuoteForm from '../components/quotes/QuoteForm'

function NewQuote() {
    const history = useHistory();

    const addQuoteHandler = quoteData => {
        console.log("author: " + quoteData.author)
        console.log("text: " + quoteData.text)

        history.push('/quotes')
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    )
}

export default NewQuote
